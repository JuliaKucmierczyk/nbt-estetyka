import React from "react";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { instagram } from "react-icons-kit/icomoon/instagram";
import { phone } from "react-icons-kit/icomoon/phone";
import { mail } from "react-icons-kit/icomoon/mail";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import Booksy from "../images/booksy.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-icons">
        <article className="left-footer">
          <div>
            <a href="https://www.booksy.com/pl-pl/">
              <img src={Booksy} alt="Booksy" className="booksy iconka" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <Icon
                icon={facebook2}
                size={26}
                className="iconka"
                style={{ marginTop: "0.3rem" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <Icon
                icon={instagram}
                size={26}
                className="iconka"
                style={{ marginTop: "0.3rem" }}
              />
            </a>
          </div>
        </article>
        <article className="right-footer">
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
            {/* +48 510 714 846 */}
          </Link>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
