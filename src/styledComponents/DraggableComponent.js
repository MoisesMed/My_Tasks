import {
  StyledImgs,
  StyledImgsDiv,
  StyledItemTask,
  StyledRow,
  StyledTaskTitle,
} from "./Table";
import { Col } from "react-bootstrap";
import Arrow_Left from "../assets/arrow_left.svg";
import Arrow from "../assets/arrow.svg";
import Trash from "../assets/trash.svg";
import { Draggable } from "react-beautiful-dnd";
import React, { useEffect } from "react";

export default function DraggableComponent({
  setItemSelected,
  item,
  index,
  openModal,
  columnId,
  handleChangeStatus,
  handleDelete,
}) {

  const handleModal = () => {
    setItemSelected(item)
    openModal(columnId)
  }

  useEffect(() => {
    setItemSelected({});
  }, []);

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <StyledItemTask
            index={index}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <StyledRow>
              <Col xs={10} onClick={() => handleModal()}>
                <StyledTaskTitle title={item.title}>
                  {item.title}{" "}
                </StyledTaskTitle>
              </Col>
              <Col className={"p-0"} xs={2}>
                <StyledImgsDiv>
                  {columnId !== "1" && (
                    <StyledImgs
                      onClick={() => handleChangeStatus("left", item, columnId)}
                      src={Arrow_Left}
                    />
                  )}

                  {columnId !== "3" && (
                    <StyledImgs
                      onClick={() =>
                        handleChangeStatus("right", item, columnId)
                      }
                      src={Arrow}
                    />
                  )}
                  <StyledImgs
                    onClick={() => handleDelete(item.id)}
                    src={Trash}
                  />
                </StyledImgsDiv>
              </Col>
            </StyledRow>
          </StyledItemTask>
        );
      }}
    </Draggable>
  );
}
