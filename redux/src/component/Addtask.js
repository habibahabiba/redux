import React, { useState } from 'react'
import { Form} from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addtask } from '../js/Action'




const Addtask = () => {
  const[text,settext]=useState("")
  const dispatch=useDispatch()
  const handleadd=(e)=>{
    e.preventDefault()
    if (text){
      dispatch(addtask({id:Math.random(),text,isDone:false}))
      
    }
    else{
      alert("can not empty task")
    }
  }
  return (
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Control type="text" placeholder="WRite task"  onChange={(e)=>settext(e.target.value)}/>
     
    </Form.Group>

  
    <Button variant="primary" type="submit" onClick={handleadd}>
      Add
    </Button>
  </Form>

    </div>
  )
}

export default Addtask