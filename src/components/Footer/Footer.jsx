import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (

    <div className="footer">

      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mohit.chordiya.3@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/mac_1302?igshid=MzNlNGNkZWQ4Mg=="><Insta color="white" size={"3rem"} /></a>

        </div>
        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7023533153361309696" height="457" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
      </div>
    </div>
  );
};

export default Footer;
