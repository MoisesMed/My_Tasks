import {StyledImgs, StyledImgsDiv, StyledItemTask, StyledRow, StyledTaskTitle} from "./Table";
import {Col, Form} from "react-bootstrap";
import Arrow_Left from "../assets/arrow_left.svg";
import Arrow from "../assets/arrow.svg";
import Trash from "../assets/trash.svg";
import {Draggable} from "react-beautiful-dnd";
import React, {useEffect, useState} from "react";

export default function DraggableComponent({item, index}) {
    return (
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
                        {...provided.dragHandleProps}
                    >
                        <StyledRow isDragging={snapshot.isDragging}>
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
                                        // onClick={() => handleChangeStatus(provided)}
                                        src={Arrow_Left}/>

                                    <StyledImgs
                                        // onClick={() => handleChangeStatus(indexCol + 1, item)}
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
    )
}