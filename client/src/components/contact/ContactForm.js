import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, current]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <>
      <div className='mb-3 w-100 p-1 bg-dark'>
        <h2>{current ? "Update Contact" : "Add Your Contact"}</h2>
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
            required
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
            required
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
            required
          />
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='type'
            value='personal'
            checked={type === "personal"}
            onChange={handleChange}
          />{" "}
          Personal{" "}
          <input
            className='form-check-input'
            type='radio'
            name='type'
            value='professional'
            checked={type === "professional"}
            onChange={handleChange}
          />{" "}
          Professional
        </div>

        <div className='mt-2'>
          <button type='submit' className='btn btn-warning'>
            {current ? "Edit Contact" : "Add Contact"}
          </button>
          {current && (
            <button
              type='submit'
              className='btn btn-secondary'
              onClick={clearAll}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
