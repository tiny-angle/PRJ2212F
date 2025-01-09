import React from "react";
import * as containerStyles from "./footer.module.css";
// import { Link, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  return (
    <div className={containerStyles.footercontainer}>
      <div className={containerStyles.title}>
        <span>Dev Blog</span>
      </div>
    </div>
  );
};

export default Footer;
