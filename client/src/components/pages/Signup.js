import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Signup = ({ history }) => {
  const { setAlert } = useContext(AlertContext);
  const { registerUser, clearError, error, isAuthenticated } = useContext(
    AuthContext
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/login");
    }

    if (error === "User already exits") {
      setAlert(error, "danger");
      clearError();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("All fields are required", "danger");
    } else if (password !== confirmPassword) {
      setAlert("Passwords not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-xs-12 m-auto'>
          <h2 className='bg-primary p-3 '>Signup Your Account</h2>
          <div className='mt-4'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Name'
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
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter Password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  required
                  minLength='6'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                  minLength='6'
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
