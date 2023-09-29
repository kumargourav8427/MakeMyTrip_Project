import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginSinup() {
  async function handlesubmit() {
    const email = document.getElementById("e").value;
    const password = document.getElementById("p").value;
    // console.log(email + password);
    const data = await axios.get(
      `http://127.0.0.1:8085/users/getuser?value1=${email}&value2=${password}`
    );
    console.log(data.data.length);
    if (data.data.length === 1) {
      // alert("Login successfully");
      window.location.href = "http://localhost:3000/";
    } else {
      alert("Wrong Details");
      window.location.href = "http://localhost:3000/loginSignup";
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mx-auto justify-content-center py-2 text-white login_color rounded text-center ">
          <h3 className="login_head">Welcome</h3>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              autoComplete="off"
              id="e"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="password">Passsword</label>
            <input
              type="password"
              className="form-control"
              name="password"
              autoComplete="off"
              id="p"
              required
            />
          </div>
          <div className="button">
            <Button
              type="submit"
              className="login_button"
              onClick={handlesubmit}
            >
              Login
            </Button>
          </div>
          <div className="my-2">
            <p className="input">
              Don't have account?{" "}
              <Link to="/register" className="same_link">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSinup;
