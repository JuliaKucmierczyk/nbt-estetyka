import React from "react";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { phone } from "react-icons-kit/icomoon/phone";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import { fileText2 } from "react-icons-kit/icomoon/fileText2";
import file from "../documents/regulaminzałącznik.docx";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-icons">
        <div className="footer-icon">
          <Link
            to={file}
            download="Regulamin nbt-estetyka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon={fileText2}
              size={26}
              className="iconka"
              style={{ marginTop: "0.3rem" }}
            />
            Regulamin
          </Link>
        </div>
        <div className="footer-icon">
          <a href="tel:+48510714846">
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
          </a>
        </div>{" "}
        <div className="footer-icon">
          <a
            href="https://www.facebook.com/Estetyka.Nela.Tyszkiewicz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              icon={facebook2}
              size={26}
              className="iconka"
              style={{ marginTop: "0.3rem" }}
            />
            Facebook
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
