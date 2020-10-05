import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  ERROR_CONTACT,
  GET_CONTACTS,
} from "../types";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR_CONTACT, payload: err.response.data.msg });
    }
  };

  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR_CONTACT, payload: err.response.data.msg });
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: ERROR_CONTACT,
        payload: err.response.msg,
      });
    }
  };

  // Update Contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_CONTACT,
        payload: err.response.msg,
      });
    }
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        loading: state.loading,
        addContact,
        getContacts,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContact,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
