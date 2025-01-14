// src/pages/index.js
import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import * as homeStyles from "../styles/home.module.css";
import Card from "../components/Card";

const IndexPage = ({ data }) => {
  const {
    allStrapiBlog: { nodes },
  } = data;
  console.log({ nodes });
  return (
    <Layout pageTitle="Home Page">
      <div className={homeStyles.postlist}>
        {nodes.map((node) => (
          <Link key={node.id} className={homeStyles.articlelink} to={`/article/${node.slug}`}>
            <div className={homeStyles.cardbox}>
              <Card
                title={node?.title}
                imgurl={node?.cover?.url}
                updatedAt={node?.updatedAt}
                tag={node?.tags[0].tagname}
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allStrapiBlog {
      nodes {
        slug
        updatedAt(formatString: "MMMM DD, YYYY")
        title
        cover {
          url
        }
        tags {
          tagname
        }
        id
      }
    }
  }
`;

export const Head = () => <title>Home Page - Strapi Gatsby Blog</title>;

export default IndexPage;
