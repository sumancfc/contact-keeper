import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import Loading from "../layout/Loading";
import ContactFilter from "./ContactFilter";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    ContactContext
  );

  useEffect(() => {
    getContacts();

    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please, Add Contact</h4>;
  }

  return (
    <>
      <ContactFilter />

      {contacts !== null && !loading ? (
        <TransitionGroup className='scroll' id='scroll'>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Contacts;
