import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UpdatingUser } from "../Redux/UserSlice";

const UserModal = ({user}) => {
    const dispatch= useDispatch()
    const [updatedUser, setUpdatedUser] = useState({
        _id: user._id
    })
    const HandleChange = (e)=>{
        setUpdatedUser({...updatedUser, [e.target.name]: e.target.value})
    }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Updating=()=>{
    dispatch(UpdatingUser(updatedUser))
    handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
         <Form.Control defaultValue={user.name} onChange={HandleChange} name='name'  type="text" placeholder="Enter name" />
         <Form.Control defaultValue={user.age} onChange={HandleChange} name='age' type="number" placeholder="Enter age" />
         <Form.Control defaultValue={user.email} onChange={HandleChange} name='email' type="email" placeholder="Enter email" />
         <Form.Control defaultValue={user.password} onChange={HandleChange} name='text' type="text" placeholder="Enter password" />
         <Button variant='primary'>Create a user</Button>

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Updating}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModal;
