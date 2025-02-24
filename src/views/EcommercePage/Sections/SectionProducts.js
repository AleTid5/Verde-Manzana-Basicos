import React from "react";

// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Accordion from "components/Accordion/Accordion.js";

// Server
import { getProducts } from "../../../api/EcommerceServer";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import Paginations from "../../../components/Pagination/Pagination";
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";
import { GoogleAnalyticsContext } from "../../../components/Contexts/GoogleAnalyticsContext";
import ProductNotFound from "./ProductNotFound";

const useStyles = makeStyles(styles);

const productsRef = React.createRef();

const initialState = {
  paging: {
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
        parseInt(action.paging.total / action.paging.limit) + 1;
      const pages = [];

      [...Array(totalPages).keys()].map(
        page =>
          action.products.length > 0 &&
          pages.push({
            text: page + 1,
            active:
              parseInt(action.paging.offset / action.paging.limit) === page
          })
      );

      return {
        ...state,
        products: action.products,
        paging: { ...action.paging, pages }
      };
    }
    case "changePaginationLimit": {
      return {
        ...state,
        paging: {
          ...state.paging,
          limit: action.limit
        }
      };
    }
    default: {
      return state;
    }
  }
};

const SectionProducts = ({
  isFetchingProducts,
  productSearch,
  productsFetched
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { pushEvent } = React.useContext(GoogleAnalyticsContext);

  React.useEffect(() => {
    pushEvent("Section Products", "Site load");

    fetchProducts();
  }, []);

  React.useEffect(() => {
    isFetchingProducts && fetchProducts();
  }, [isFetchingProducts]);

  const fetchProducts = (
    offset = state.paging.offset,
    limit = state.paging.limit
  ) => {
    const startDate = Date.now();
    setIsLoading(true);

    getProducts(offset, limit, productSearch).then(response => {
      const timeSpentInSeconds = (Date.now() - startDate) / 1000;

      const { products, paging } = response;

      dispatch({
        type: "fetchProducts",
        products,
        paging
      });

      pushEvent(
        "Section Products | Products Fetched",
        `Fetched ${products.length} products`
      );

      pushEvent(
        "Section Products | Time Spent Fetching",
        `${timeSpentInSeconds} seconds have been spent`
      );

      setIsLoading(false);
      productsFetched();
    });
  };

  const changePaginationLimit = limit => {
    pushEvent(
      "Section Products | Pagination Changed",
      `From ${state.paging.limit} to ${limit}`
    );

    dispatch({
      type: "changePaginationLimit",
      limit
    });

    fetchProducts(state.paging.offset, limit);
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
                      title: `Productos por pagina (${state.paging.limit})`,
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
                                  checked={state.paging.limit === 10}
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
                                  checked={state.paging.limit === 20}
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
                                  checked={state.paging.limit === 50}
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
            <GridContainer>
              <ProductSkeleton
                isLoading={isLoading}
                productsLoading={state.paging.limit}
              >
                {state.products.length > 0 ? (
                  state.products.map((product, key) => (
                    <Product product={product} key={key} />
                  ))
                ) : (
                  <ProductNotFound />
                )}
              </ProductSkeleton>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <Paginations
          pages={state.paging.pages.map(page => ({
            ...page,
            onClick: () => {
              fetchProducts((page.text - 1) * state.paging.limit);
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
