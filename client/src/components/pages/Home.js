import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Contacts from "../contact/Contacts";

const Home = () => {
  const { getAllUsers } = useContext(AuthContext);

  useEffect(() => {
    getAllUsers();
    //eslint-disable-next-line
  }, []);
  return (
    <div className='mt-5'>
      <Contacts />
    </div>
  );
};

export default Home;
