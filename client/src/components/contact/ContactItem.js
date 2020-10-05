import React, { useContext } from "react";
import { Card, Button, CardTitle, CardText, Badge } from "reactstrap";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { deleteContact, clearCurrent, setCurrent } = useContext(
    ContactContext
  );
  const { _id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <Card body className='m-3'>
      <CardTitle>
        {name}{" "}
        <Badge color={type === "personal" ? "primary" : "success"}>
          {type}
        </Badge>
      </CardTitle>
      <CardText>Email: {email}</CardText>
      <CardText>Phone: {phone}</CardText>
      <div className='mt-3'>
        <Button
          color='primary'
          className='mr-3'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </Button>
        <Button color='danger' onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default ContactItem;
