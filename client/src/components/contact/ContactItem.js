import React from "react";
import { Card, Button, CardTitle, CardText, Badge } from "reactstrap";

const ContactItem = ({ contact }) => {
  return (
    <Card body className='mb-3'>
      <CardTitle>
        {contact.name}{" "}
        <Badge color={contact.type === "personal" ? "primary" : "success"}>
          {contact.type}
        </Badge>
      </CardTitle>
      <CardText>Email: {contact.email}</CardText>
      <CardText>Phone: {contact.phone}</CardText>
      <div className='mt-3'>
        <Button color='primary' className='mr-3'>
          Edit
        </Button>
        <Button color='danger'>Delete</Button>
      </div>
    </Card>
  );
};

export default ContactItem;
