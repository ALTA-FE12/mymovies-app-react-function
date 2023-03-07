import React, { Component } from "react";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-4 dark:bg-gray-600 text-base-content"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <div>
        <h3
          className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "1.3em",
          }}
        >
          Copyright © 2023 - All right reserved by FIlmku
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
