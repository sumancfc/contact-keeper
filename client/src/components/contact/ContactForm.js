import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const { name, email, phone, type } = contact;
  return (
    <>
      <div className='mb-3 w-100 p-1 bg-dark'>
        <h2>Add Your Contact</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter phone'
            name='phone'
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value='personal'
            checked={type === "personal"}
            onChange={handleChange}
          />{" "}
          Personal{" "}
          <input
            className='form-check-input'
            type='radio'
            value='professional'
            checked={type === "professional"}
            onChange={handleChange}
          />{" "}
          Professional
        </div>

        <div className='mt-2'>
          <button type='submit' className='btn btn-warning'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
