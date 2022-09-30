

import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Deltask,isDonTask } from '../js/Action'
import Edit from './Edit'
import "../css/main.css"

const Task = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div className='task' >
<span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task}/>
        <Button variant="primary" onClick={()=>dispatch(Deltask(task.id))}>delete</Button>
        <Button variant="primary" onClick={()=>dispatch(isDonTask(task.id))}>{task.isDone ? "undone" : "Done"}</Button>
    </div>
  
    
  )
}

export default Task