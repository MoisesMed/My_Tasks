import React from "react";
import styled from "styled-components";
import Plus from "../assets/plus.svg"
import Arrow_Left from "../assets/arrow_left.svg"
import Arrow from "../assets/arrow.svg"
import Trash from "../assets/trash.svg"
import {Col, Form, Row} from "react-bootstrap";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: 4px 4px 6px 4px rgba(220, 207, 230, 0.22);
  border-radius: 30px;
  height: 500px;
  min-width: 300px;
  background: rgba(254, 254, 254, 0.91);
  margin: 50px 20px;
`

export const StyledHeader = styled.div`
  display: flex;
  height: 50px;
  padding: 0 8px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const StyledCircle = styled.div`
  background-color: #F7EEFF;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  box-shadow: inset 2px 2px 4px rgba(182, 182, 182, 0.39);
`

export const StyledSpanTitle = styled.span`
  margin: 0 8px;
  color: var(--brand-gray-color);
  font-size: 30px;
`

export const NewTaskButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  color: #BBBBF8;
  border: 2px solid #BBBBF8;
  box-shadow: 0 4px 4px 2px rgba(235, 223, 247, 0.31);
  border-radius: 30px;
  background-color: transparent;
  align-items: center;
  padding: 0 12px;

  img {
    width: 20px;
    margin-left: -10px;
    margin-right: -2px;
  }
`

export const DefaultButton = styled.button`
  font-weight: 700;
  //font-family: "Roboto";
  font-size: 18px;
  display: flex;
  color: #FFFFFF;
  border: 2px solid #BBBBF8;
  border-radius: 30px;
  background-color: #BBBBF8;
  box-shadow: 0 4px 4px 2px rgba(235, 223, 247, 0.31);
  align-items: center;
  padding: 0 12px;
  width: 120px;
  justify-content: center;
`

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`

export const StyledFlexButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const StyledBody = styled.div`
  height: 100%;
  background-color: transparent;
  padding: 0 4px;
  max-height: 100%;
  //min-height:100%;
  overflow-y: auto;
`

export const StyledItemTask = styled.div`
  display: flex;
  justify-content: center;
  cursor: grab;
  background-color:#FFFFFF;
  border-bottom: 3px solid #F7EEFF;
  border-top: ${({index}) => index === 0 ? "3px solid #F7EEFF" : ""};
  width: 100%;
  padding: 4px 2px;

  span {
    color: #636363;
    font-weight: 500;
    font-size: 18px;
  }
`

export const StyledNewTask = styled.div`
  cursor: pointer;
  color: #A1A1A1;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  background-color: #FAF6FD;
  padding: 2px 0;
  border-bottom: 3px solid #F7EEFF;
`

export const StyledImgsDiv = styled.div`
  max-width: 100%;
  gap: 4px;
  display: flex;
  justify-content: flex-end;
`

export const StyledImgs = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1)
  }
`

export const StyledTaskTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`

export const StyledRow = styled(Row)`
  width: 100%;
  align-items: center;
background-color: ${({isDragging}) => isDragging ? "red" : "#FFFFFF"};
  input {
    width: 14px;
    height: 14px;
  }
`

export const StyledDroppable = styled.div`
  background-color: ${({isDraggingOver}) => isDraggingOver ? "#F0F0F0" : "transparent"};
  border-radius:8px;
  //padding: 4px 0;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`

export function To_Do({data, handleChangeStatus}) {

    return (
        <StyledTable>
            <StyledHeader>
                <StyledFlex>
                    <StyledCircle/>
                    <StyledSpanTitle>To do!</StyledSpanTitle>
                </StyledFlex>
                <NewTaskButton><img src={Plus} alt={"plus"}/>New task</NewTaskButton>
            </StyledHeader>
            <StyledBody>

                <Droppable droppableId="todo">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {data.map((item, index) =>
                                <Draggable draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <StyledItemTask ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps} >
                                            <StyledRow>
                                                <Col className={"text-center p-0"} xs={1}>
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
                                                <Col className={"p-0"} xs={2}>
                                                    <StyledImgsDiv>
                                                        <StyledImgs
                                                            onClick={() => handleChangeStatus(2, item)}
                                                            src={Arrow}/>
                                                        {/*<StyledImgs src={done}/>*/}
                                                        <StyledImgs src={Trash}/>
                                                    </StyledImgsDiv>
                                                </Col>
                                            </StyledRow>
                                        </StyledItemTask>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <StyledNewTask><img src={Plus} alt={"plus"}/> Adicionar Tarefa</StyledNewTask>
            </StyledBody>
            <StyledHeader>
                <StyledFlexButtons>
                    <DefaultButton>Excluir</DefaultButton>
                    <DefaultButton>Concluído</DefaultButton>
                </StyledFlexButtons>
            </StyledHeader>
        </StyledTable>
    );
}

export function Doing({data, handleChangeStatus}) {

    return (
        <DragDropContext>
            <StyledTable>
                <StyledHeader>
                    <StyledFlex>
                        <StyledCircle/>
                        <StyledSpanTitle>Doing!</StyledSpanTitle>
                    </StyledFlex>
                    <NewTaskButton><img src={Plus} alt={"plus"}/>New task</NewTaskButton>
                </StyledHeader>
                <StyledBody>
                    <Droppable droppableId="doing">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {data.map((item, index) =>
                                    <Draggable draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <StyledItemTask ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps} >
                                                <StyledRow>
                                                    <Col className={"text-center p-0"} xs={1}>
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
                                                    <Col className={"p-0"} xs={2}>
                                                        <StyledImgsDiv>
                                                            <StyledImgs
                                                                onClick={() => handleChangeStatus(1, item)}
                                                                src={Arrow_Left}/>
                                                            <StyledImgs
                                                                onClick={() => handleChangeStatus(3, item)}
                                                                src={Arrow}/>
                                                            {/*<StyledImgs src={done}/>*/}
                                                            <StyledImgs src={Trash}/>
                                                        </StyledImgsDiv>
                                                    </Col>
                                                </StyledRow>
                                            </StyledItemTask>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <StyledNewTask><img src={Plus} alt={"plus"}/> Adicionar Tarefa</StyledNewTask>
                </StyledBody>
                <StyledHeader>
                    <StyledFlexButtons>
                        <DefaultButton>Excluir</DefaultButton>
                        <DefaultButton>Concluído</DefaultButton>
                    </StyledFlexButtons>
                </StyledHeader>
            </StyledTable>
        </DragDropContext>
    );
}

export function Done({data, handleChangeStatus}) {

    return (
        <DragDropContext>
            <StyledTable>
                <StyledHeader>
                    <StyledFlex>
                        <StyledCircle/>
                        <StyledSpanTitle>Done!</StyledSpanTitle>
                    </StyledFlex>
                    <NewTaskButton><img src={Plus} alt={"plus"}/>New task</NewTaskButton>
                </StyledHeader>
                <StyledBody>
                    <Droppable droppableId="done">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {data.map((item, index) =>
                                    <Draggable draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <StyledItemTask ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps} >
                                                <StyledRow>
                                                    <Col className={"text-center p-0"} xs={1}>
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
                                                    <Col className={"p-0"} xs={2}>
                                                        <StyledImgsDiv>
                                                            <StyledImgs
                                                                onClick={() => handleChangeStatus(2, item)}
                                                                src={Arrow_Left}/>
                                                            <StyledImgs src={Trash}/>
                                                        </StyledImgsDiv>
                                                    </Col>
                                                </StyledRow>
                                            </StyledItemTask>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <StyledNewTask><img src={Plus} alt={"plus"}/> Adicionar Tarefa</StyledNewTask>
                </StyledBody>
                <StyledHeader>
                    <StyledFlexButtons>
                        <DefaultButton>Excluir</DefaultButton>
                        <DefaultButton>Concluído</DefaultButton>
                    </StyledFlexButtons>
                </StyledHeader>
            </StyledTable>
        </DragDropContext>
    );
}