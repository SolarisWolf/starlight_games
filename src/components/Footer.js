import React from "react";
import "../styles/aat.css"; // One level up if styles is outside the pages folder

const Footer = () => (
  <footer>
    <div className="bottom_para">
      <p>
        <b>GAMES AVAILABLE:</b>
      </p>
      <ul>
        <li>SPIDERMAN-2</li>
        <li>GTA-V</li>
        <li>MINECRAFT</li>
        <li>PUBG</li>
        <li>AMONG US</li>
        <li>OUTLAST</li>
        <li>ONLY UP!</li>
        <li>MICROSOFT FLIGHT SIMULATOR</li>
      </ul>
    </div>
    <div className="bottom_para">
      <p>
        <b>LINKS:</b>
      </p>
      <a href="/contactus" className="nav-link">
        CONTACT US
      </a>
      <br />
      <a href="/community" className="nav-link">
        COMMUNITY
      </a>
    </div>
  </footer>
);

export default Footer;
