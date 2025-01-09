import React from "react";
import Layout from "../../components/Layout/layout";
import { Link, graphql } from "gatsby";
import * as blogStyles from "../../styles/blog.module.css";

const ArticlePost = ({ data }) => {
  const {
    strapiBlog: { title, tags, updatedAt, cover, titleauthor, content },
  } = data;
  console.log({ data });
  return (
    <Layout>
      <section className={blogStyles.articlebody}>
        <h1 className={blogStyles.blogtitle}>{title}</h1>
        <div className={blogStyles.blogtags}>
          {tags?.map((tag) => (
            <span
              key={tag.tagname}
              className={blogStyles.blogtag}
            >{`#${tag.tagname}`}</span>
          ))}
        </div>
        <div className={blogStyles.blogdate}>{updatedAt}</div>
        <figure className={blogStyles.blogcoverimg}>
          <img src={`http://127.0.0.1:1337${cover.url}`} alt="" />
        </figure>
        <article
          class={blogStyles.blogcontent}
          dangerouslySetInnerHTML={{
            __html: content.data.content,
          }}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    strapiBlog(slug: { eq: $slug }) {
      slug
      tags {
        tagname
      }
      cover {
        url
      }
      updatedAt(formatString: "MMMM DD YYYY")
      content {
        data {
          content
        }
      }
      title
      titleauthor {
        name
      }
    }
  }
`;

export default ArticlePost;
