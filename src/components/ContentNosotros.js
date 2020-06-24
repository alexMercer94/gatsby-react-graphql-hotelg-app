import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React from "react";

const Content = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`;

const ContentNosotros = () => {
  const result = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  const { title, content, image } = result.allDatoCmsPage.nodes[0];

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 3rem;
        `}
      >
        {title}
      </h2>
      <Content>
        <p>{content}</p>
        <Image fluid={image.fluid}></Image>
      </Content>
    </>
  );
};

export default ContentNosotros;
