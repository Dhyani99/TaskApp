import { useState } from "react";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "./register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("/users/login", userData)
      .then((response) => {
        if (response.status === 200) {
          setError(false);
          navigate("/register");
        }
      })
      .catch((e) => {
        setError(true);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <section className="vh-100 mt-3 loginSection justify-content-center d-flex">
      <form className="loginForm" onSubmit={handleLogin}>
        <h1>Login to your Account</h1>

        {error === true ? (
          <p className="errorText">
            You have entered wrong username or password !!!
          </p>
        ) : null}
        <div className="form-group mb-4 mt-4">
          <input
            type="email"
            name="email"
            value={email}
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            value={password}
            className="form-control form-control-lg"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-lg-center mt-4 pt-2">
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{"  "}
            <a href="/register" className="link-success">
              Register
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
