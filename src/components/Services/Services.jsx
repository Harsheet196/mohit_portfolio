import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Expertise</span>
        <spane>
          Strategic Financial Consulting
          <br />
          Investment Advisory Excellence
          <br />
          Client-Centric Financial Solutions
          <br/>
          Proactive Financial Planning
          <br/>
          Growth-Oriented Financial Management
        </spane>
        <a href="resume/resume.pdf" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Audits"}
            detail={"GST Audits,Income Tax Audits,Audits of Co-operative Socities,Statuatory Audits in Nationalised Banks like PNB,UCO and SBI Bank,Audits of Govt Scheme like MNREGA"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "10rem", top: "12rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Analyst"}
            detail={"Business Performance Analyst,Strategic Financial Analyst,Risk Management Specialist,Investment Strategist, Budgeting and Forecasting Analyst,Tax Planning Advisor, Client-Centric Financial Analyst,Growth and Financial Success Consultant,Financial Planning and Analysis Specialist,Business and Financial Solutions Expert"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "30rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Investment banking"}
            detail={"Mergers and Acquisitions Analyst,Capital Markets Associate,Investment Banking Analyst,Corporate Finance Advisor,Equity Research Analyst,Debt Capital Markets Analyst,Financial Modeling Specialist"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
