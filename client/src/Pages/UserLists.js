import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getAllDataUSers } from '../Redux/UserSlice'
import {useSelector} from 'react-redux'
import UserCard from '../Components/UserCard'
import { Alert } from 'react-bootstrap'

const UserLists = () => {
  const msg = useSelector(state=> state.UserReducer.msg)

  const dispatch = useDispatch()
  //useEffect ==> []
  useEffect(()=>{
    dispatch(getAllDataUSers())
    //first render / when we refresh
  },[])


  const users = useSelector(state=>state.UserReducer.users)
  
  return (
    <div>
      {users.map((user,i)=> <UserCard key={i} user={user}/>)}
      {msg  && <Alert variant="danger">{msg}</Alert>}
      
    </div>
  )
}

export default UserLists