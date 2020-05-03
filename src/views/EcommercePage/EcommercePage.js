/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function EcommercePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Verde Manzana Básicos"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "success"
        }}
        withMobileSidebar={false}
      />
      <Parallax
        image={require("assets/img/sections/E-Commerce/Background.JPG")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>#VOLVIERON LOS ENVÍOS!</h1>
                <h4>
                  Comprá desde tu casa y recibilo de forma <b>segura.</b>
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionProducts />
      </div>

      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a href="#" target="_self" className={classes.aClasses}>
                Verde Manzana Básicos
              </a>{" "}
              Todos los derechos reservados.
            </div>
          </div>
        }
      />
    </div>
  );
}
