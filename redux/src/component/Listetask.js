import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from './Task'
const Listetask = () => {
  const [status, setStatus] = useState("All")

  const liste=useSelector(state=>state.Listereducer.listetasks)
    return (
    <div className=''>
       <Button variant="primary" onClick={()=> setStatus("All")} >all</Button>
      <Button variant="primary" onClick={()=> setStatus("DONE")} >done</Button>
      <Button variant="primary" onClick={() => setStatus("UNDONE")} >undone</Button>
        {status==="DONE"
        ?liste
        .filter((el) => el.isDone === true)
        .map(el => (<Task task={el} key={el.id}/>))
        : status === "UNDONE"
        ?liste
        .filter((el) => el.isDone === false)
        .map(el => (<Task  task= {el} key={el.id}/>))


        : liste.map(el => (<Task  task= {el} key={el.id}/>))}


    </div>
  )
}

export default Listetask