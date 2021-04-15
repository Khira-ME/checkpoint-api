import React from 'react';
import { Card } from "react-bootstrap";
import "../App.css";

const UserCard = ({ user }) => {

  return (
    <Card style={{ width: "300px", margin: "15px" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.address.city}</Card.Text>
        <Card.Link href={user.website} >Website Link</Card.Link>
      </Card.Body>
    </Card>  
  );
};

export default UserCard;
