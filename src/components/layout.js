import { css, Global } from "@emotion/core";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import useSeo from "../hooks/use-seo";
import Footer from "./footer";
import Header from "./header";

const Layout = props => {
  const seo = useSeo();
  const {
    fallbackSeo: { description, title },
  } = seo;

  return (
    <Fragment>
      <Global
        styles={css`
          body {
            html {
              font-size: 62.5%;
              box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }

            body {
              font-size: 18px;
              font-size: 1.8rem;
              line-height: 1.5;
              font-family: "PT Sans", sans-serif;
            }

            h1,
            h2,
            h3 {
              margin: 0;
              line-height: 1.5;
            }

            h1,
            h2 {
              font-family: "Roboto", serif;
            }

            h3 {
              font-family: "PT Sans", sans-serif;
            }

            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header></Header>
      {props.children}
      <Footer title={title}></Footer>
    </Fragment>
  );
};

export default Layout;
