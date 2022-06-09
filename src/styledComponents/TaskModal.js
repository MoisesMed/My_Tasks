import { Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  StyledCancelButton,
  StyledCreateButton,
  StyledInput,
  StyledSmallSpan,
  StyledTextarea,
  StyledTitle,
  StyledSelect,
} from "./StyledComponents";
import DatePicker from "react-datepicker";
import { api } from "../services/api";
import "react-datepicker/dist/react-datepicker.css";

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 30px;
    box-shadow: inset -3px 3px 6px 2px rgba(220, 207, 230, 0.22),
      inset 3px -3px 6px 2px rgba(220, 207, 230, 0.22);

    .sdp {
      width: 250px;
      margin-left: 16px;
    }
  }

  .modal-header {
    justify-content: center;
    color: var(--brand-black-color);
  }

  .modal-body {
    /* gap: 16px; */
    display: flex;

    .form-check-input {
      width: 2em;
      cursor: pointer;
    }

    form {
      margin-top: 16px !important;
      justify-content: center;
      align-items: center;
      display: flex;

      span {
        cursor: pointer;
      }
    }
  }

  .modal-footer {
    justify-content: center;
  }
`;

export default function TaskModal(props) {
  const [due, setDue] = useState(false);
  const [data, setData] = useState({});

  const handleCreateTask = async () => {
    try {
      const response = await api.post("/task/create", data);
      props.init();
      props.onHide();
    } catch (erro) {
      console.error(erro);
    }
  };

  useEffect(() => {
    setDue(false);
    if(props.itemSelected){
      setData(props.itemSelected)
    }else{
      setData({status:props.columnSelected});
    }
  }, [props]); 

  return (
    <StyledModal
      {...props}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <StyledTitle>Create a task</StyledTitle>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <StyledSmallSpan>Task name</StyledSmallSpan>
          <StyledInput
            value={data.title}
            // defaultValue={props.itemSelected.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            name={"title"}
          />
          <StyledSmallSpan>Task description</StyledSmallSpan>
          <StyledTextarea
            value={data.description}
            // defaultValue={props.itemSelected.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            name={"description"}
          />
          <StyledSmallSpan>Task status</StyledSmallSpan>
          <StyledSelect
            onChange={(e) => setData({ ...data, status: e.target.value })}
            value={data.status}
            // defaultValue={props.columnSelected}
            name={"status"}
            aria-label="Default select example"
          >
            <option value="1">To Do</option>
            <option value="2">Doing</option>
            <option value="3">Done</option>
          </StyledSelect>
          <Form>
            <Form.Check
              checked={due}
              onChange={(e) => setDue(e.target.checked)}
              type="switch"
              id="disabled-custom-switch"
            />
            <StyledSmallSpan onClick={() => setDue(!due)}>
              Add due date
            </StyledSmallSpan>
          </Form>
        </div>
        <div>
          {due && (
            <DatePicker
            // defaultValue={props.itemSelected.due_date}
            selected={props.itemSelected.due_date && new Date(props.itemSelected.due_date)}
            inline
              onChange={(date) => console.log( date )}
            />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <StyledCreateButton onClick={props.onHide}>Cancel</StyledCreateButton>
        <StyledCancelButton onClick={handleCreateTask}>Save</StyledCancelButton>
      </Modal.Footer>
    </StyledModal>
  );
}
