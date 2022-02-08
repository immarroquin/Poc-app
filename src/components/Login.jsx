import React, { Fragment, useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPaswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (name, value) => {
    if (name === "user") {
      setUser(value);
      setError(false);
    } else {
      if (value.length < 5) {
        setPaswordError(true);
        setError(false);
      } else {
        setPaswordError(false);
        setPassword(value);
        setError(false);
      }
    }
  };
  const ifCorrect = (item) => {
    if (item.user.length > 0 && item.password.length > 0) {
      if (item.user === "lorena@gmail.com" && item.password === "123456") {
        const { user, password } = item;
        let obj = { user, password };
        let account = JSON.stringify(obj);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setError(true);
      }
    } else {
      setIsLogin(false);
      setError(true);
    }
  };

  const handleSubmit = () => {
    let account = { user, password };
    if (account) {
      ifCorrect(account);
    }
  };
  return (
    <Fragment>
      <div className="container-form">
        <form className="form-login">
          <p className="login-title">SIGN IN</p>

          <div className="email-container">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="usuario@ejemplo.com"
              id="user"
              name="user"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>

          <div className="email-container">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={passwordError ? "input-error" : "form-control"}
              placeholder="***********"
              id="password"
              name="password"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          {error && (
            <label className="label-error">
              Incorrect username or password
            </label>
          )}
          <a
            type="button"
            className="btn btn-login btn-dark btn-sm"
            onClick={handleSubmit}
            href={isLogin ? "/home" : null}
          >
            SIGN IN
          </a>
        </form>
      </div>
    </Fragment>
  );
};
export default Login;
