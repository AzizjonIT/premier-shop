import React, { useEffect, useState } from "react";
import "./User_name.css";
import axios from "axios";
import { Link } from "react-router-dom";

const User_name = () => {
  const url = "http://localhost:9000/users";

  const [UserName, setUserName] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [Error, setError] = useState(false);

  const CheckUser = async () => {
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;

        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.userName === UserName && element.userPass === UserPass) {
            setError(false);
            localStorage.setItem("login", JSON.stringify(element));
            window.location.replace(`/${element.id}/Home`);

            break;
          } else {
            setError(true);
          }
        }
      })
      .catch((error) => {
        window.location.replace("/User_name_up/");
      });
  };

  useEffect(() => {
    const Login = JSON.parse(localStorage.getItem("login"));

    if (Login && Login.login !== "" && Login.password !== "") {
      setUserName(Login.login);
      setUserPass(Login.password);
    }
  }, []);

  return (
    <React.Fragment>
      <section className="login">
        <div className="sign-wrap">
          <div className="sign">
            <div className="sign-buttons">
              <Link to={"/"}>
                <button className="sign-in">Sign In</button>
              </Link>

              <Link to={"/User_name_up"}>
                <button className="sign-up">Sign Up</button>
              </Link>
            </div>
            <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
              <p className="d-flex">
                <span>Username</span>{" "}
                {Error ? <p className="text-danger mx-1">failed</p> : ""}{" "}
              </p>
              <input
                className="input_sgin"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
              />
              <p className="d-flex">
                <span>Password</span>{" "}
                {Error ? <p className="text-danger mx-1">failed</p> : ""}{" "}
              </p>
              <input
                className="input_sgin"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setUserPass(e.target.value)}
                value={UserPass}
              />
              <div>
                <Link to={"/"}>
                  <button onClick={CheckUser} className="sing-button">
                    Sign In
                  </button>
                </Link>
              </div>
            </form>
            <p className="sign-form-text">
              Forgot Username? | Forgot Password?
            </p>
            <p className="sign-maditory">Fields marked with * are mandatory</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default User_name;
