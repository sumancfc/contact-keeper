import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactFilter from "./ContactFilter";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please, add contact</h4>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <ContactForm />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <ContactFilter />
          <TransitionGroup className='scroll' id='scroll'>
            {filtered !== null
              ? filtered.map((contact) => (
                  <CSSTransition
                    key={contact.id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact.id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
