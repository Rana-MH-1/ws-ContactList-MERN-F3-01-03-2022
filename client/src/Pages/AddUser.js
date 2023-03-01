import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddingUser } from '../Redux/UserSlice'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({})
    const HandleChange = (e)=>{
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    const adding=(e)=>{
        e.preventDefault()
        dispatch(AddingUser(newUser))
        navigate('/users')
    }
  return (
    <div>
         <Form>
         <Form.Control onChange={HandleChange} name='name'  type="text" placeholder="Enter name" />
         <Form.Control onChange={HandleChange} name='age' type="number" placeholder="Enter age" />
         <Form.Control onChange={HandleChange} name='email' type="email" placeholder="Enter email" />
         <Form.Control onChange={HandleChange} name='password' type="password" placeholder="Enter password" />
         <Button onClick={adding} variant='primary'>Create a user</Button>

         </Form>
    </div>
  )
}

export default AddUser