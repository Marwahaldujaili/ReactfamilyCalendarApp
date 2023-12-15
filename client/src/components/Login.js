import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export const Login = () => {
  const [data, setData] = useState({
    userName: "marwa",
    password: "123",
    success: true,
  });

  const navigate = useNavigate();
  const { userName, password } = data;
  const inputUsername = useRef();
  const inputPassword = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userNameValue = inputUsername.current.value;
    const passwordValue = inputPassword.current.value;
    if (userNameValue === userName && passwordValue === password) {
      navigate("/home");
      setData({ ...data, success: true });
    } else {
      setData({ ...data, success: false });
    }
  };
  return (
    <div className="loginPage">
      <Typography variant="h4" sx={{ color: "orangered" }}>
        {" "}
        Family Calendar App
      </Typography>
      <Typography variant="h2">Login</Typography>

      <form onSubmit={submitHandler} className="loginForm">
        <TextField
          type="text"
          id="userName outlined-required"
          label="Username"
          name="userName"
          inputRef={inputUsername}
        />

        <TextField
          type="password"
          name="password"
          label='Password'
          id="Password outlined-required"
          inputRef={inputPassword}
        />
        {!data.success && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            <ReportProblemIcon fontSize="small" /> Incorrect credentials. Please
            try again.
          </p>
        )}
        <Button
          type="submit"
          value="Login"
          variant="contained"
          sx={{ backgroundColor: "orangered" }}>
          Login
        </Button>
      </form>
    </div>
  );
};
