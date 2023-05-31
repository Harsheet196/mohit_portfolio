import React from "react";
import "./linkedin.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (

        <div className="linkedin">

            {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
            {/* <div className="f-content">
        <span>mohit.chordiya.3@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/mac_1302?igshid=MzNlNGNkZWQ4Mg=="><Insta color="white" size={"3rem"} /></a>

        </div> */}
            {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7023533153361309696" height="457" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
            {/* </div> */}
            <div class="carrousel">
                <span class="upr-title">Subscribe my newsletter on Linkedin : The MC mindset</span>
                <input type="radio" name="slides" id="radio-1" ></input>
                <input type="radio" name="slides" id="radio-2"></input>
                <input type="radio" name="slides" id="radio-3"></input>
                <input type="radio" name="slides" id="radio-4"></input>
                <ul class="slides">
                    <li class="slide">
                        <div class="text-center">
                            {/* <img src="https://fiziotera.com/imgs/glaza-upr-1.png"> */}
                        </div>
                        <div>
                            <span class="upr-title">Real estate Investment Trust : REIT</span>
                        </div>
                        <div>
                            <span class="author">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7064709602310766592" height="527" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>  </span>
                        </div>
                    </li>
                    <li class="slide">
                        <div>
                            {/* <img src="https://fiziotera.com/imgs/glaza-upr-2.png"> */}
                        </div>
                        <div>
                            <span class="upr-title">Cab Aggregators</span>
                            <span class="author">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7066885336966045696" height="527" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> </span>
                        </div>
                    </li>
                    <li class="slide">
                        <div>
                            {/* <img src="https://fiziotera.com/imgs/glaza-upr-3.png"> */}
                        </div>
                        <div>
                            <span class="upr-title">MSM REITS </span>
                            <span class="author">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7065073998555942912" height="527" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>  </span>
                        </div>
                    </li>
                    <li class="slide">
                        <div>
                            {/* <img src="https://fiziotera.com/imgs/glaza-upr-4.png"> */}
                        </div>
                        <div>
                            <span class="upr-title">Healthcare</span>
                            <span class="author">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7060667997790568449" height="527" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> </span>
                        </div>
                    </li>

                </ul>
                <div class="slidesNavigation">
                    <label for="radio-1" id="dotForRadio-1"></label>
                    <label for="radio-2" id="dotForRadio-2"></label>
                    <label for="radio-3" id="dotForRadio-3"></label>
                    <label for="radio-4" id="dotForRadio-4"></label>
                </div>
            </div>
        </div>
    );
};

export default Footer;
