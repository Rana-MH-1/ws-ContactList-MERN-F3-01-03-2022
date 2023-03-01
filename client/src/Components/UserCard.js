import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeletingUser } from "../Redux/UserSlice";
import UserModal from "./UserModal";

const UserCard = ({user}) => {
    const dispatch = useDispatch()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.age}</Card.Subtitle>
        <Card.Text>
          {user.email}
        </Card.Text>
       
        <Button onClick={()=> dispatch(DeletingUser(user._id))} variant="danger">Delete</Button>
        <UserModal user={user}/>

      </Card.Body>
    </Card>
  );
};

export default UserCard;
