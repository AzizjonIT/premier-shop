import React, { useEffect, useState } from "react";
import "./User_launch.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaRegUserCircle } from "react-icons/fa";

function Example() {
  const [show, setShow] = useState(false);
  const [User, setUser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Login = JSON.parse(localStorage.getItem("login"));

  const Logout = () => {
    localStorage.removeItem("login");
    window.location.replace("/");
  };



  useEffect(() => {
    Login ?? window.location.replace("/");
    if (Login) {
      setUser(Login);
    }
  }, []);

  const UserId = JSON.parse(localStorage.getItem("login"));

  return (
    <React.Fragment>
      <FaRegUserCircle onClick={handleShow} className="navbar_icons" />

      <Offcanvas id={"offcanvas"} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={"offcanvas_title"}>
            <div className="offcanvas_class">
              <FaRegUserCircle className="offcanvas_icons" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas_text">
            <h4> {User.userName} </h4>
            <h6> {User.userPass} </h6>

            <button onClick={Logout} className="offcanvas_but">
              Exit
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}

export default Example;
