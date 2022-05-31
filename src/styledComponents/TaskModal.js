import {Form, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import React, {useState, useEffect} from "react";
import {
    StyledCancelButton,
    StyledCreateButton,
    StyledInput,
    StyledSmallSpan,
    StyledTextarea,
    StyledTitle
} from "./StyledComponents";
import DatePicker from 'sassy-datepicker';

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 30px;
    box-shadow: inset -3px 3px 6px 2px rgba(220, 207, 230, 0.22), inset 3px -3px 6px 2px rgba(220, 207, 230, 0.22);

    .sdp {
      width: 250px
    }
  }

  .modal-header {
    justify-content: center;
    color: var(--brand-black-color);
  }

  .modal-body {
    gap: 16px;
    display: flex;

    .form-check-input {
      width: 2em;
      cursor: pointer;
    }

    form {
      margin-top: 4px;
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
`

export default function TaskModal(props) {
    const [due, setDue] = useState(false)
console.log(props)
    useEffect(() => {
        setDue(false)
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
                    <StyledInput/>
                    <StyledSmallSpan>Task description</StyledSmallSpan>
                    <StyledTextarea/>
                    <Form>
                        <Form.Check
                            checked={due}
                            onChange={(e) => setDue(e.target.checked)}
                            type="switch"
                            id="disabled-custom-switch"
                        />
                        <StyledSmallSpan onClick={() => setDue(!due)}>Add due date</StyledSmallSpan>
                    </Form>
                </div>
                <div>
                    {due && <DatePicker onChange={(date) => console.log(date)}/>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <StyledCreateButton onClick={props.onHide}>Cancel</StyledCreateButton>
                <StyledCancelButton onClick={props.onHide}>Save</StyledCancelButton>
            </Modal.Footer>
        </StyledModal>
    );
}