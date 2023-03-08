import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreateTask = ({ handleClose, handleShow, show }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control name='taskName' type="text" placeholder="Task Name" value={taskName} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' as="textarea" placeholder="Task Description" value={description} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Create
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateTask