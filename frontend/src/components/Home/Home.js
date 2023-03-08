import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import CreateTask from '../Modal/CreateTask';
import '../../App.css'
import Card from '../Card/Card.js';
const Home = () => {
    const [show, setShow] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const updateListArray=(obj,index)=>{
        let tempList=taskList
        taskList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        taskList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    }

    const deleteTask=(index)=>{
        let tempList= taskList;
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    return (
        <>
            <div className="header text-center ">
                <h1>Todo List</h1>
                <Button variant='primary' onClick={handleShow}>Create Task</Button>
            </div>
            <div className="task-container row my-3 rounded">
                {taskList && taskList.map((obj,index) => <Card obj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
            </div>
            <CreateTask handleClose={handleClose} handleShow={handleShow} show={show} saveTask={saveTask} />
        </>
    )
}

export default Home