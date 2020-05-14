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
import InputAdornment from "@material-ui/core/InputAdornment";
import Hidden from "@material-ui/core/Hidden";
import Search from "@material-ui/icons/Search";
import CustomInput from "../../components/CustomInput/CustomInput";
import mainIcon from "assets/img/MainIcon.png";

const useStyles = makeStyles(styles);

export default function EcommercePage() {
  const [isFetchingProducts, setIsFetchingProducts] = React.useState(false);
  const [productSearch, setProductSearch] = React.useState(null);
  const searchBoxRef = React.useRef();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const classes = useStyles();

  const findProductBySearch = () => {
    setIsFetchingProducts(true);
    setProductSearch(searchBoxRef.current.children[0].value);
  };

  return (
    <div>
      <Header
        brand={
          <>
            <Hidden xsDown implementation="css" className={classes.hidden}>
              Verde Manzana Básicos
            </Hidden>
            <Hidden smUp implementation="css" className={classes.hidden}>
              <img src={mainIcon} alt="..." width="40px" />
            </Hidden>
          </>
        }
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "success"
        }}
        withMobileSidebar={false}
        links={
          <GridContainer>
            <GridItem xs={2} sm={4} md={4} lg={6} />
            <GridItem xs={10} sm={8} md={8} lg={6}>
              <CustomInput
                white
                labelText="Buscar productos..."
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={findProductBySearch}
                      className={classes.clickable}
                    >
                      <Search />
                    </InputAdornment>
                  ),
                  ref: searchBoxRef,
                  onKeyUp: e => e.keyCode === 13 && findProductBySearch()
                }}
              />
            </GridItem>
          </GridContainer>
        }
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
        <SectionProducts
          isFetchingProducts={isFetchingProducts}
          productSearch={productSearch}
        />
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
