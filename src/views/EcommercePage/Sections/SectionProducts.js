import React from "react";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";

// Server
import { getProducts } from "../../../api/EcommerceServer";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import Paginations from "../../../components/Pagination/Pagination";
import Loader from "./Loader";
import Badge from "../../../components/Badge/Badge";

const useStyles = makeStyles(styles);

const productsRef = React.createRef();

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

const SectionProducts = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (offset = 0, limit = state.pagination.limit) => {
    setIsLoading(true);

    getProducts(offset, limit).then(response => {
      const [products, pagination] = response;

      dispatch({
        type: "fetchProducts",
        products,
        pagination
      });

      setIsLoading(false);
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
        <h2 ref={productsRef}>Nuestros productos</h2>
        <GridContainer>
          <GridItem md={3} sm={4}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <Accordion
                  active={[0, 2]}
                  activeColor="success"
                  collapses={[
                    {
                      title: `Productos por pagina (${state.pagination.limit})`,
                      content: (
                        <div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={state.pagination.limit === 10}
                                  onChange={() => changePaginationLimit(10)}
                                  value="10"
                                  name="10 por pagina"
                                  aria-label="10"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot
                              }}
                              label="10 productos"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={state.pagination.limit === 20}
                                  onChange={() => changePaginationLimit(20)}
                                  value="20"
                                  name="20 por pagina"
                                  aria-label="20"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot
                              }}
                              label="20 productos"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={state.pagination.limit === 50}
                                  onChange={() => changePaginationLimit(50)}
                                  value="50"
                                  name="50 por pagina"
                                  aria-label="50"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot
                              }}
                              label="50 productos"
                            />
                          </div>
                        </div>
                      )
                    }
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} sm={8}>
            <Loader isLoading={isLoading}>
              <GridContainer>
                {state.products.map((product, key) => (
                  <GridItem md={4} sm={6} key={key}>
                    <Card plain product>
                      <CardHeader noShadow image>
                        <a href={product.permalink}>
                          <div
                            style={{
                              height: "200px",
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPositionX: "center",
                              backgroundPositionY: "center",
                              backgroundImage: `url(${product.pictures[0].url})`
                            }}
                          />
                        </a>
                      </CardHeader>
                      <CardBody plain className={classes.cardBody}>
                        <a href="{product.permalink">
                          <h4 className={classes.cardTitle}>{product.title}</h4>
                        </a>
                        <p className={classes.description}>
                          <Badge color="info" className={classes.blueBadge}>
                            Envío con normalidad
                          </Badge>
                        </p>
                      </CardBody>
                      <CardFooter
                        plain
                        className={classes.justifyContentBetween}
                      >
                        <div className={classes.priceContainer}>
                          <span className={classes.price}>
                            ${product.price}
                          </span>
                        </div>
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
            </Loader>
          </GridItem>
        </GridContainer>
        <Paginations
          pages={state.pagination.pages.map(page => ({
            ...page,
            onClick: () => {
              fetchProducts((page.text - 1) * state.pagination.limit);
              window.scrollTo(0, productsRef.current.offsetParent.offsetTop);
            }
          }))}
          color="success"
        />
      </div>
    </div>
  );
};

export default SectionProducts;
