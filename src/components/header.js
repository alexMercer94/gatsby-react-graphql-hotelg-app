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

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
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
        <HomeLink to="/">Hotel Gatsby</HomeLink>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
