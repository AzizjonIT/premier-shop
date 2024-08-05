import React from 'react'
import "../Navbar/Navbar.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer_container">
          <p className="footer_p"> Tel: +998 95 898 23 26</p>
          <a href="https://www.instagram.com/bvb.602/">
            <AiFillInstagram className="footer_icon1" />
          </a>
          <a href="https://t.me/azizjon_usmonaliyev">
            <FaTelegram className="footer_icons" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer
