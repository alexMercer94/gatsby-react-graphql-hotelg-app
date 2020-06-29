import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import Navigation from "./nav";

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-family: "PT Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;

const Footer = ({ title }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navigation></Navigation>
          <HomeLink to="/">Hotel Gatsby</HomeLink>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. Todos los derechos reservados {year} &copy;
      </p>
    </>
  );
};

export default Footer;
