import React, { useState } from "react";
import swal from "sweetalert";
import logo from "../../assets/Group_59.svg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState({ type: "password" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showHide = (e) => {
    setPasswordType({
      type: passwordType.type === "password" ? "text" : "password",
    });
  };
  return (
    <div className="sign-in">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 form-center">
            <div className="card p-4 mt-5">
              <div className="d-flex justify-content-center mb-5">
                <img src={logo} alt="logo" />
              </div>
              <h2 className="text-center">Sign In</h2>
              <form>
                <div className="input-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text h-100 px-3 d-flex align-items-center">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control text-purple"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mt-4 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text h-100 px-3 d-flex align-items-center">
                      <i className="fas fa-lock" />
                    </span>
                  </div>
                  <input
                    type={passwordType.type}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text h-100 px-3 d-flex align-items-center"
                      onClick={showHide}
                    >
                      {passwordType.type === "password" ? (
                        <i className="fas fa-eye" />
                      ) : (
                        <i className="fas fa-eye-slash" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-self-center justify-content-center">
                  <button
                    type="submit"
                    className="my-5 btn-primary btn px-4 pt-2"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
