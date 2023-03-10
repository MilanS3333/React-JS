import React, { useRef } from "react";
import { useContext } from "react";
import styled from "styled-components";

// css for form
const BODY = styled.div`
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgba(34, 69, 181, 0.9),
    rgba(120, 25, 176)
  );
  height: 92vh;
  padding-top: 80px;
`;
const FORM = styled.div`
  margin: auto;
  width: 30%;
  padding: 50px 20px;
  font-family: cursive;
  background-color: #fff;
  border-radius: 20px;
`;
const H1 = styled.h1`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 8px;
`;
const PART = styled.div`
  width: 80%;
  margin: auto;
  text-align: left;
`;
const INPUT = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin-top: 40px;
  font-size: 1.5rem;
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
  outline: none;
`;
const H5 = styled.h5`
  margin-top: 20px;
  cursor: pointer;
  color: rgb(50, 100, 255);
`;
const BUTTON = styled.button`
  margin: 20px 0;
  background-color: rgb(50, 100, 255);
  color: #fff;
  font-size: 1.5rem;
  padding: 8px 0;
  border-radius: 50px;
  width: 80%;
  border: none;
`;

function LogIn(props) {
  // js for form
  const username = useRef(null);
  const password = useRef(null);
  const user = document.getElementById("username");
  const pwd = document.getElementById("password");

  const BtnClick = () => {
    username.current.focus();
    if (username.current.value == "") {
      username.innerHTML = "Please enter a username...!";
      return false;
    }

    password.current.focus();
    if (password.current.value == "") {
      password.innerHTML = "Please enter a password...!";
      return false;
    }
  };
  return (
    <BODY>
      <FORM>
        <form action="">
          <H1>Log In</H1>
          <PART>
            <INPUT placeholder="username" ref={username}></INPUT>
            <span id="username"></span>
            <INPUT placeholder="password" ref={password}></INPUT>
            <span id="password"></span>
            <H5>Forgot password?</H5>
          </PART>
          <BUTTON onClick={BtnClick}>Login</BUTTON>
        </form>
      </FORM>
    </BODY>
  );
}

export default LogIn;
