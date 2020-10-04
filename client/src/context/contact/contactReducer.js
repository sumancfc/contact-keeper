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

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
      break;

    default:
      return state;
  }
};
