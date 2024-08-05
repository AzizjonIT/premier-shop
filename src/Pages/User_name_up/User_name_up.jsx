import React, {useContext, useState } from "react";
import "./User_name_up.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import axios from "axios";

const User_name_up = () => {
  const { userRegisterObject } = useContext(Context);
    const API = "http://localhost:9000";

  const [UserName, setUserName] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [Next] = useState(false);

 
 

  const HandleNext = () => {
    if (UserName !== "" && UserPass !== "") {
      const PostData = async () => {
        userRegisterObject.userName = UserName;
        userRegisterObject.userPass = UserPass;
        localStorage.setItem("login", JSON.stringify(userRegisterObject));
        await axios
          .post(`${API}/users`, userRegisterObject)
          .then(() => alert("Everything's fine"))
          .catch((error) => console.error("Our", error));
      };
      return (
        <Link className="password_but" to={"/"} onClick={PostData}>
          Sign In
        </Link>
      );
    } else {
      return " Sign In";
    }
  };


  return (
    <React.Fragment>
      <section className="login">
        <div className="sign-wrap">
          <div className="sign">
            <div className="sign-buttons">
              <Link to={"/"}>
                <button className="sign-in_1">Sign In</button>
              </Link>

              <Link to={"/User_name_up"}>
                <button className="sign-up_1">Sign Up</button>
              </Link>
            </div>
            <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
              <p className="d-flex">
                <span>Enter a email</span>{" "}
              </p>
              <input
                className="input_sgin"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
              />
              <p className="d-flex">
                <span>Enter password</span>{" "}
              </p>
              <input
                className="input_sgin"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setUserPass(e.target.value)}
                value={UserPass}
              />
              <div>
                <div className="password_but"> {HandleNext()} </div>
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

export default User_name_up;
