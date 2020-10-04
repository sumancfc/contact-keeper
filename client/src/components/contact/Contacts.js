import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <ContactForm />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
