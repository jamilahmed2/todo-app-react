import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CreateTask from '../createTask/CreateTask';
import '../../App.css'
const Home = () => {
    const [show, setShow] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveTask = (taskObj) => {
        let tempList = taskList;
        taskList.push(taskObj);
        localStorage.setItem("taskList",JSON.stringify(tempList));
        setTaskList(tempList);
    }
    return (
        <>
            <div className="header text-center">
                <h1>Todo List</h1>
                <Button variant='primary' onClick={handleShow}>Create Task</Button>
            </div>
            <div className="task-container container">
                {taskList.map((obj)=>{
                    return <li>{obj.Name}</li>
                })}
            </div>
            <CreateTask handleClose={handleClose} handleShow={handleShow} show={show} saveTask={saveTask}/>
        </>
    )
}

export default Home