import React, {useEffect, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {
    DefaultButton,
    NewTaskButton, StyledBody, StyledCircle, StyledDroppable, StyledFlex, StyledFlexButtons, StyledHeader,
    StyledImgs,
    StyledImgsDiv,
    StyledItemTask, StyledNewTask,
    StyledRow, StyledSpanTitle, StyledTable,
    StyledTaskTitle,
    To_Do
} from "../styledComponents/Table";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Arrow from "../assets/arrow.svg";
import Trash from "../assets/trash.svg";
import Plus from "../assets/plus.svg";
import Arrow_Left from "../assets/arrow_left.svg";
import {tasks} from "../App";
import DraggableComponent from "../styledComponents/DraggableComponent";

export default function ScrumPage() {
    const [columns, setColumns] = useState([]);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            console.log("dest ===>", destItems)
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            console.log(destItems)
            destItems.map(item => item.status = destination.droppableId)
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };
    console.log(columns)
    const handleTasks = () => {
        let todoTask = tasks.filter((item) => item.status == 1)
        let doingTask = tasks.filter((item) => item.status == 2)
        let doneTask = tasks.filter((item) => item.status == 3)

        if (tasks) {
            setColumns({
                1: {
                    name: "To do",
                    items: todoTask
                },
                2: {
                    name: "Doing",
                    items: doingTask
                },
                3: {
                    name: "Done",
                    items: doneTask
                }
            })
        }
    }

    const handleChangeStatus = (type,item,column) => {
        let id = parseInt(column);
        if(type === "left"){
            item.status = id - 1
        }else{
            item.status = id + 1
        }
        console.log(item)
        handleTasks()
    }

    useEffect(() => {
        handleTasks()
    }, []);


    return (
        <Container fluid>
            <Row>
                <Row className={"justify-content-center mt-4"}>My Tasks</Row>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <Col xl={4} xs={12} key={columnId}>
                                <StyledTable>
                                    <StyledHeader>
                                        <StyledFlex>
                                            <StyledCircle/>
                                            <StyledSpanTitle>{column.name}</StyledSpanTitle>
                                        </StyledFlex>
                                        <NewTaskButton><img src={Plus} alt={"plus"}/>New task</NewTaskButton>
                                    </StyledHeader>
                                    <StyledBody>

                                        <Droppable droppableId={columnId} key={columnId}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <StyledDroppable
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        isDraggingOver={snapshot.isDraggingOver}
                                                    >
                                                        {column.items.map((item, index) =>
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <StyledItemTask
                                                                            index={index}
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}>
                                                                            <StyledRow>
                                                                                <Col
                                                                                    className={"text-center p-0"}
                                                                                    xs={1}>
                                                                                    <Form>
                                                                                        <Form.Check
                                                                                            type={"radio"}
                                                                                            id={item.id}
                                                                                        />
                                                                                    </Form>
                                                                                </Col>
                                                                                <Col xs={9}>
                                                                                    <StyledTaskTitle
                                                                                        title={item.title}>{item.title} </StyledTaskTitle>
                                                                                </Col>
                                                                                <Col className={"p-0"}
                                                                                     xs={2}>
                                                                                    <StyledImgsDiv>

                                                                                        <StyledImgs
                                                                                            onClick={() => handleChangeStatus("left",item,columnId)}
                                                                                            src={Arrow_Left}/>

                                                                                        <StyledImgs
                                                                                            onClick={() => handleChangeStatus("right",item,columnId)}
                                                                                            src={Arrow}/>
                                                                                        <StyledImgs
                                                                                            src={Trash}/>
                                                                                    </StyledImgsDiv>
                                                                                </Col>
                                                                            </StyledRow>
                                                                        </StyledItemTask>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        )}
                                                        <StyledNewTask><img src={Plus} alt={"plus"}/> Adicionar
                                                            Tarefa</StyledNewTask>
                                                        {provided.placeholder}
                                                    </StyledDroppable>
                                                );
                                            }}
                                        </Droppable>
                                    </StyledBody>
                                    {/*<StyledHeader>*/}
                                    {/*    <StyledFlexButtons>*/}
                                    {/*        <DefaultButton>Excluir</DefaultButton>*/}
                                    {/*        <DefaultButton>Concluído</DefaultButton>*/}
                                    {/*    </StyledFlexButtons>*/}
                                    {/*</StyledHeader>*/}
                                </StyledTable>
                            </Col>
                        );
                    })}
                </DragDropContext>
            </Row>
        </Container>
    );
}