//src/components/layout.js
//src/components/layout.js
import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as containerStyles from "./layout.module.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

// https://strapi.io/blog/a-deep-dive-into-strapi-graph-ql

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={containerStyles.container}>
      <Header />
      <div className={containerStyles.bodycontainer}>
        <main className={containerStyles.content}>{children}</main>
        <Footer />
      </div>
    </div>

    // <div className="pagewrapper">
    //   <header>
    //     <h1>Strapi Gatsby Blog</h1>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       {data.allStrapiCategory.nodes.map((node) => (
    //         <li key={node.slug}>
    //           <Link to={`/${node.slug}`}>{node.name}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </header>
    //   <main>
    //     <section className="hero">
    //       <h2>Welcome to the hypest blog on the interweb. </h2>
    //       <p>Checkout something cool!</p>
    //       <h2 className="pageTitle">{pageTitle}</h2>
    //     </section>
    //     <section className="content">{children}</section>
    //   </main>
    //   <footer>
    //     <div>
    //       <h2>About</h2>
    //       <p>Demo blog site using Strapi and Gatsby, Oct 2023</p>
    //     </div>
    //     <div>
    //       <h2>Article</h2>
    //       <p>
    //         <a href="https://strapi.io/blog">
    //           Build a Blog Site using Strapi and Gatsby
    //         </a>
    //       </p>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default Layout;
