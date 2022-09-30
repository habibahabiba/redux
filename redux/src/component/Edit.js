import React, { useState } from 'react'
import { Button ,Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Edittask } from '../js/Action';


const Edit = ({task}) => {
  const[show, setshow]=useState(false);
  const[Newtask,setnewtask]=useState(task.text)
  const dispatch=useDispatch ()
    const handleclose =()=>setshow(false);
    const handleShow= ()=>setshow (true);
  const handleedit=()=> {
    dispatch(Edittask(task.id,Newtask))
    handleclose()
  }
  return (
    <div>
 <Button variant="primary" onclick = {handleShow}>Edit</Button>      <Modal show={show} onHide={handleclose}>
<Modal.Header closeButton>
<Modal.Title>change task</Modal.Title>
</Modal.Header>
<Modal.Body>
<input value={Newtask} onChange={(e) => setnewtask(e.target.value)}/>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleclose}>Close</Button>
<Button variant="primary" onClick={handleedit}>Save changes</Button>
</Modal.Footer>
</Modal>

    </div>
  )
}

export default Edit