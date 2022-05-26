import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import React, {useState} from "react";
import {StyledCancelButton, StyledCreateButton} from "./StyledComponents";

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 30px;
    box-shadow: inset -3px 3px 6px 2px rgba(220, 207, 230, 0.22), inset 3px -3px 6px 2px rgba(220, 207, 230, 0.22);
  }

  .modal-header {
    justify-content: center
  }

  .modal-footer {
    justify-content: center;
  }
`
export default function TaskModal(props) {

    return (
        <StyledModal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create a task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.columnSelected}</h4>
            </Modal.Body>
            <Modal.Footer>
                <StyledCreateButton onClick={props.onHide}>Cancel</StyledCreateButton>
                <StyledCancelButton onClick={props.onHide}>Save</StyledCancelButton>
            </Modal.Footer>
        </StyledModal>
    );
}