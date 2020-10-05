import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Contacts from "../contact/Contacts";
import ContactForm from "../contact/ContactForm";

const Home = () => {
  const { getAllUsers } = useContext(AuthContext);

  useEffect(() => {
    getAllUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <ContactForm />
          </div>
          <div className='col-md-6 col-sm-12'>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
