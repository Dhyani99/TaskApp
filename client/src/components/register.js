function Register() {
  return (
    <section className="vh-100 mt-3 loginSection justify-content-center d-flex">
      <form className="loginForm">
        <h1>Register your Account</h1>
        <br></br>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control form-control-lg"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group mb-4 mt-4">
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control form-control-lg"
            placeholder="Enter password"
          />
        </div>

        <div className="text-lg-center mt-4 pt-2">
          <button type="submit" className="btn-primary">
            Register
          </button>
          {/* <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{"  "}
            <a href="/register" className="link-success">
              Register
            </a>
          </p> */}
        </div>
      </form>
    </section>
  );
}

export default Register;
