import React from "react";
import * as containerStyles from "./header.module.css";
import { Link, graphql, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        nodes {
          name
          slug
        }
      }
    }
  `);

  return (
    <div className={containerStyles.headercontainer}>
      <div className={containerStyles.title}>
        <span>Dev Blog</span>
      </div>
      <nav className={containerStyles.nav}>
        {data.allStrapiCategory.nodes.map((node) => (
          <span key={node.slug}>
            <Link to={`/${node.slug}`}>{node.name}</Link>
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Header;
