import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import {useDispatch, useSelector} from "react-redux"
import { logIn, signUp } from "../../Actions/AuthAction";


const Auth = () => {
  const dispatch=useDispatch()
  const [isSignUp, setIsSignUP] = useState(false);
  const loading=useSelector((state)=>state.authReducer.loading)
  console.log(loading)
 
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
    confirmPassword: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPassword ? dispatch(signUp(data)): setConfirmPass(false)
    }
    else{
      dispatch(logIn(data))
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({ firstName: "",
    lastName: "",
    password: "",
    userName: "",
    confirmPassword: "",});
  };
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Squid</h1>
          <h6>Make memories with your close ones</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h1>{isSignUp ? "SIGN UP" : "LOGIN"}</h1>
          {isSignUp && (
            <div>
              <input
                className="infoInput"
                placeholder="First name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                className="infoInput"
                placeholder="Last name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              className="infoInput"
              placeholder="@userName"
              type="text"
              name="userName"
              onChange={handleChange}
              value={data.userName}
            />
          </div>

          <div>
            <input
              className="infoInput"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                className="infoInput"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            *passwords didn't match
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                alignSelf: "flex-center",
              }}
              onClick={() => {setIsSignUP((prev) => !prev);  resetForm()}}
            >
              {isSignUp
                ? "Already registered? Please Login"
                : "New to Squid? Please SignUp"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading? "Loading.." : isSignUp ? "SIGN UP" : "LOG IN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
