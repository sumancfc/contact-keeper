import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const { loginUser, error, clearError } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (error === "Invalid Credientials") {
      setAlert(error, "danger");
      clearError();
    }
    //eslint-disable-next-line
  }, [error]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("All fields are required", "danger");
    } else {
      loginUser({ email, password }).then(() => {
        props.history.push("/");
      });
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-xs-12 m-auto'>
          <h2 className='bg-primary p-3 '>Login Your Account</h2>
          <div className='mt-4'>
            <form onSubmit={handleSubmit}>
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
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
