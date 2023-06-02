import React from "react";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { phone } from "react-icons-kit/icomoon/phone";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import Booksy from "../images/booksy.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-icons">
        <div className="footer-icon">
          <a href="https://www.booksy.com/pl-pl/">
            <img src={Booksy} alt="Booksy" className="booksy iconka" />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://www.facebook.com/">
            <Icon
              icon={facebook2}
              size={26}
              className="iconka"
              style={{ marginTop: "0.3rem" }}
            />
          </a>
        </div>
        <div className="footer-icon">
          <Link to={"/Contact"}>
            <Icon
              icon={phone}
              size={25}
              className="iconka"
              style={{
                marginTop: "0.3rem",
                marginRight: "0.3rem",
              }}
            />
            +48 510 714 846
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
