import React, { useState } from 'react'
import EditTask from '../Modal/EditTask'

const Card = ({ obj,index, deleteTask, updateListArray }) => {
  const [show, setShow] = useState(false);
  const handleDelete = () => {
    deleteTask()
  }
  const handleEdit = () => {
    handleShow()
  }
  const updateTask = (obj) => {
    updateListArray(obj, index)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3 shadow-sm p-3 mb-5 bg-light">
          <div className="card-body ">
            <h5 className="card-title">{obj.Name}</h5>
            <p className="card-text">  {obj.Description}</p>
            <i style={{ cursor: "pointer" }} className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
            <i style={{ cursor: "pointer" }} className="fa-solid fa-pen-to-square" onClick={handleEdit}></i>

          </div>
        </div>
      </div>
      <EditTask obj={obj} updateTask={updateTask} handleClose={handleClose} handleShow={handleShow} show={show} />
    </>
  )
}

export default Card