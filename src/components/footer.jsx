import React from "react";
import "./styles.css";

const currentYear = new Date();
function Footer() {
  return (
    <div className="footer">
      <p>
        Copyright {currentYear.getFullYear()} - {currentYear.getFullYear() + 3}
      </p>
    </div>
  );
}

export default Footer;
