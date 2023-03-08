import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CreateTask from '../createTask/createTask';
import '../../App.css'
const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
                <div className="header text-center">
                    <h1>Todo List</h1>
                    <Button variant='primary' onClick={handleShow}>Create Task</Button>
                </div>
                <CreateTask handleClose={handleClose} handleShow={handleShow} show={show} />
        </>
    )
}

export default Home