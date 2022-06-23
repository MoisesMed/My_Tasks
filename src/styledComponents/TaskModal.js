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
import DatePicker from "sassy-datepicker";
import { api } from "../services/api";
import { toast } from "react-toastify";

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
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState();
  const [data, setData] = useState({});

  const handleCreateTask = async () => {
    try {
      setIsLoading(true);
      if(props.itemSelected.id){
        const response = await api.patch(`/task/update/${props.itemSelected.id}`, data);
      }else{
        const response = await api.post("/task/create", data);
      }
      props.init();
      props.onHide();
      toast.success("Tarefa criada com sucesso !!!");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setDue(false);
    if (props.itemSelected.due_date) {
      setData({
        status: props.columnSelected,
        due_date: props.itemSelected.due_date,
      });
    } else {
      setData({
        status: props.columnSelected,
      });
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
            disabled={isLoading}
            defaultValue={props.itemSelected.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            name={"title"}
          />
          <StyledSmallSpan>Task description</StyledSmallSpan>
          <StyledTextarea
            value={data.description}
            disabled={isLoading}
            defaultValue={props.itemSelected.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            name={"description"}
          />
          <StyledSmallSpan>Task status</StyledSmallSpan>
          <StyledSelect
            onChange={(e) => setData({ ...data, status: e.target.value })}
            value={data.status}
            disabled={isLoading}
            defaultValue={props.columnSelected}
            name={"status"}
            aria-label="Default select example"
          >
            <option value="1">To Do</option>
            <option value="2">Doing</option>
            <option value="3">Done</option>
          </StyledSelect>
          {!props.itemSelected.due_date ? (
            <Form>
              <Form.Check
                checked={due}
                disabled={isLoading}
                onChange={(e) => setDue(e.target.checked)}
                type="switch"
                id="disabled-custom-switch"
              />
              <StyledSmallSpan onClick={() => setDue(!due)}>
                Add due date
              </StyledSmallSpan>
            </Form>
          ) : null}
        </div>
        <div>
          {due || props.itemSelected.due_date ? (
            <DatePicker
              selected={props.itemSelected.due_date?new Date(props.itemSelected.due_date):new Date()}
              inline
              onChange={(date) => setData({ ...data, due_date: date })}
            />
          ) : null}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <StyledCreateButton onClick={props.onHide}>Cancel</StyledCreateButton>
        <StyledCancelButton onClick={handleCreateTask}>Save</StyledCancelButton>
      </Modal.Footer>
    </StyledModal>
  );
}
