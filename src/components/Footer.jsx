import React from "react";
import "./wrap.css";

const Footer = () => {
  return (
    <>
      <div class="space"></div>
      <div class="ground">
        <div class="foo-content">
          <link
            href="https://www.ortussolutions.com/__media/OrtusLogoBlanco.png"
            alt="Ortus White"
            height="50"
            width="238"
            class="footer-logo"
          />
          <div class="mailing-wrap">
            <a href="mailto:nikolinandoni80@gmail.com">
              {" "}
              nikolinandoni80@gmail.com{" "}
            </a>
          </div>
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="nikolin-andoni"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://al.linkedin.com/in/nikolin-andoni?trk=profile-badge"
            >
              Nikolin Andoni
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
