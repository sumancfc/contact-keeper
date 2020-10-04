import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CURRENT,
  REMOVE_ALERT,
} from "../types";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Suman Shrestha",
        email: "suman@gmail.com",
        phone: "9860088834",
        type: "professional",
      },
      {
        id: 2,
        name: "Sumi Shrestha",
        email: "sumi@gmail.com",
        phone: "9860088834",
        type: "personal",
      },
      {
        id: 3,
        name: "Bhumi Shrestha",
        email: "bhumi@gmail.com",
        phone: "9860088834",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
