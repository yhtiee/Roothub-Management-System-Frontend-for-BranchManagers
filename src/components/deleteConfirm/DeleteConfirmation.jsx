import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./deleteConfirm.css"

const DeleteConfirmation = ({ show, onHide, onConfirm }) => {
  return (
    <div>
    <Modal show={show} onHide={onHide} className="main_modal">
      <div className="modal_child">
        <div className="modal_baby">
          <Modal.Title>Confirm Delete</Modal.Title>
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <Modal.Footer className='modal_footer'>
            <Button variant="secondary" onClick={onHide} className="modal_btn1">
              Cancel
            </Button>
            <Button variant="danger" onClick={onConfirm} className="modal_btn2">
              Delete
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
    </div>
  )
}

export default DeleteConfirmation