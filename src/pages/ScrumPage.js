import React, {useEffect, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {
    NewTaskButton, StyledBody, StyledCircle, StyledDroppable, StyledFlex, StyledHeader,
    StyledImgs,
    StyledImgsDiv,
    StyledItemTask, StyledNewTask,
    StyledRow, StyledSpanTitle, StyledTable,
    StyledTaskTitle
} from "../styledComponents/Table";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Arrow from "../assets/arrow.svg";
import Trash from "../assets/trash.svg";
import Plus from "../assets/plus.svg";
import Arrow_Left from "../assets/arrow_left.svg";
import TaskModal from "../styledComponents/TaskModal";

export default function ScrumPage({tasks, setTasks}) {
    const [columns, setColumns] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [columnSelected,setColumnSelected] = useState()

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
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

    const handleChangeStatus = (type, item, column) => {
        let id = parseInt(column);
        if (type === "left") {
            item.status = id - 1
        } else {
            item.status = id + 1
        }
        handleTasks()
    }

    const handleDelete = (id) => {
        const newTasks = tasks.filter((item) => id !== item.id)
        setTasks(newTasks)
    }

    const openModal = (id) => {
        setModalShow(true)
       setColumnSelected(id)
    }

    useEffect(() => {
        handleTasks()
    }, [tasks]);


    return (
        <Container fluid>
                    <TaskModal show={modalShow} onHide={() => setModalShow(false)} columnSelected={columnSelected}/>
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
                                        <NewTaskButton onClick={() => openModal(columnId)}><img src={Plus} alt={"plus"}/>New task</NewTaskButton>
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
                                                                            onClick={() => openModal({nome:"moises",senha:"teste"}) }
                                                                            index={index}
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}>
                                                                            <StyledRow>
                                                                                <Col xs={10}>
                                                                                    <StyledTaskTitle
                                                                                        title={item.title}>{item.title} </StyledTaskTitle>
                                                                                </Col>
                                                                                <Col className={"p-0"}
                                                                                     xs={2}>
                                                                                    <StyledImgsDiv>
                                                                                        {columnId !== "1" && <StyledImgs
                                                                                            onClick={() => handleChangeStatus("left", item, columnId)}
                                                                                            src={Arrow_Left}/>}

                                                                                        {columnId !== "3" && <StyledImgs
                                                                                            onClick={() => handleChangeStatus("right", item, columnId)}
                                                                                            src={Arrow}/>}
                                                                                        <StyledImgs
                                                                                            onClick={() => handleDelete(item.id)}
                                                                                            src={Trash}/>
                                                                                    </StyledImgsDiv>
                                                                                </Col>
                                                                            </StyledRow>
                                                                        </StyledItemTask>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        )}
                                                        <StyledNewTask onClick={() => openModal(columnId)}><img src={Plus} alt={"plus"}/>New task</StyledNewTask>
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