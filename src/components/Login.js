import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  formControl: {
    margin: "20px 0",
    width: "100%",
    
  },
  inputLabel: {
    color: "black",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
  },
  loginButton: {
    background: "lightblue",
    color: "black",
    padding: "10px 20px",
    marginTop: "20px",
    borderRadius: "20px",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&:hover": {
      background: "#FF8E53",
      color: "white",
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!/^[a-zA-Z0-9]{8,16}$/.test(event.target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError && !passwordError && email.trim() !== "" && password.trim() !== "")  {
      return navigate("search");
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage("Please fill Email and Password");
    }
  };

  return (
    <div className={classes.root}>
    <div style={{ padding: "20px", textAlign: "center" }}>
      <form onSubmit={handleSubmit} style={{border: "2px solid #ccc", padding:"50px", borderRadius:"10px"}}>
        <FormControl className={classes.formControl} error={emailError}>
          <InputLabel className={classes.inputLabel}  htmlFor="email">
            Email
          </InputLabel>
          <Input
            className={classes.input}
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <FormHelperText className={classes.errorText}>
              Invalid email
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className={classes.formControl} error={passwordError}>
          <InputLabel className={classes.inputLabel} htmlFor="password">
            Password
          </InputLabel>
          <Input
            className={classes.input}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <FormHelperText className={classes.errorText}>
              Password must be 8-16 alphanumeric characters
            </FormHelperText>
          )}
        </FormControl>
        <Button className={classes.loginButton} type="submit">
          Login
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      />
    </div>
    </div>
  );
};

export default Login;
