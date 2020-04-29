import React from "react";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

// Server
import { getProducts } from "../../../api/EcommerceServer";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import Paginations from "../../../components/Pagination/Pagination";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import withLoader from "./Loader";

const useStyles = makeStyles(styles);

const initialState = {
  pagination: {
    limit: 20,
    offset: 0,
    pages: [],
    total: 0
  },
  products: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts": {
      const totalPages =
        parseInt(action.pagination.total / action.pagination.limit) + 1;
      const pages = [];

      [...Array(totalPages).keys()].map(page => {
        pages.push({
          text: page + 1,
          active:
            parseInt(action.pagination.offset / action.pagination.limit) ===
            page
        });
      });

      return {
        ...state,
        products: action.products,
        pagination: { ...action.pagination, pages }
      };
    }
    case "changePaginationLimit": {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          limit: action.limit
        }
      };
    }
  }
};

const SectionProducts = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (offset = 0, limit = state.pagination.limit) => {
    console.log(limit);
    props.setIsLoading(true);

    getProducts(offset, limit).then(response => {
      const [products, pagination] = response;

      dispatch({
        type: "fetchProducts",
        products,
        pagination
      });

      props.setIsLoading(false);
    });
  };

  const changePaginationLimit = limit => {
    dispatch({
      type: "changePaginationLimit",
      limit
    });

    fetchProducts(state.pagination.offset, limit);
  };

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.flex}>
          <div className={classes.middleWidth}>
            <h2>Nuestros productos</h2>
          </div>
          <div className={`${classes.middleWidth} ${classes.textRight}`}>
            <CustomDropdown
              dropdownHeader="Seleccione la cantidad de productos que desea listar"
              buttonText={`Productos por pagina (${state.pagination.limit})`}
              hoverColor="success"
              buttonProps={{
                round: true,
                block: false,
                color: "success"
              }}
              dropPlacement="bottom"
              dropdownList={[
                { divider: true },
                <div key={10} onClick={() => changePaginationLimit(10)}>
                  10
                </div>,
                { divider: true },
                <div key={20} onClick={() => changePaginationLimit(20)}>
                  20
                </div>,
                { divider: true },
                <div key={50} onClick={() => changePaginationLimit(50)}>
                  50
                </div>,
                { divider: true },
                <div key={100} onClick={() => changePaginationLimit(100)}>
                  100
                </div>,
                { divider: true }
              ]}
            />
          </div>
        </div>
        <GridContainer>
          <GridItem md={12} sm={12}>
            <GridContainer>
              {state.products.map((product, key) => (
                <GridItem md={3} sm={3} key={key}>
                  <Card plain product>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          src={product.pictures[0].url}
                          alt="..."
                          height="200px"
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${product.pictures[0].url})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <a href={product.permalink}>
                        <h4 className={classes.cardTitle}>{product.title}</h4>
                      </a>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentBetween}>
                      <div className={classes.priceContainer}>
                        <span className={classes.price}>$ {product.price}</span>
                      </div>
                      <div className={classes.bluePill}>Envío normal</div>
                      <Tooltip
                        id="tooltip-top"
                        title="¡Lo quiero!"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button
                          justIcon
                          simple
                          color="rose"
                          className={classes.pullRight}
                          onClick={() =>
                            (window.location.href = product.permalink)
                          }
                        >
                          <ShoppingCart />
                        </Button>
                      </Tooltip>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
        </GridContainer>
        <Paginations
          pages={state.pagination.pages.map(page => ({
            ...page,
            onClick: () => {
              fetchProducts((page.text - 1) * state.pagination.limit);
            }
          }))}
          color="success"
        />
      </div>
    </div>
  );
};

SectionProducts.propTypes = {
  setIsLoading: PropTypes.func
};

SectionProducts.defaultProps = {
  setIsLoading: () => {}
};

//export default withLoader(SectionProducts);
export default SectionProducts;
