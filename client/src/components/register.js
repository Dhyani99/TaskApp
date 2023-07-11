import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [userError, setUserError] = useState(false);

  let navigate = useNavigate();

  const handleRegister = (e) => {
    setUserError(false);
    e.preventDefault();

    if (name !== "" && password !== "" && email !== "") {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post("/users/register", userData)
        .then((response) => {
          if (response.status === 200) {
            setError(false);
            setUserError(false);
            navigate("/");
          } else if (response.status === 201) {
            setUserError(true);
            setError(false);
          }
        })
        .catch((e) => {
          setUserError(false);
          setError(true);
          setEmail("");
          setPassword("");
        });
    } else {
      setError(true);
    }
  };

  return (
    <section className="vh-100 mt-3 loginSection justify-content-center d-flex">
      <form className="loginForm" onSubmit={handleRegister}>
        <h1>Register your Account</h1>
        <br></br>
        {error === true ? (
          <p className="errorText">
            Please enter all the values in the form correctly !!!
          </p>
        ) : null}
        {userError === true ? (
          <p className="errorText">User Already Exists !!!</p>
        ) : null}
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            value={name}
            className="form-control form-control-lg"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            Register
          </button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Already have an account?{"  "}
            <a href="/" className="link-success">
              Login
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
