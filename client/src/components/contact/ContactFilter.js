import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filtered, filterContact, clearFilter } = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, []);

  const handleFilter = (e) => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          ref={text}
          placeholder='Filter Contacts'
          onChange={handleFilter}
        />
      </div>
    </form>
  );
};

export default ContactFilter;
