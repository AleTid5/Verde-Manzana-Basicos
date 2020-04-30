import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
const useStyles = makeStyles(styles);

const Loader = ({ children, isLoading }) => {
  const classes = useStyles();

  return (
    <div>
      {isLoading && (
        <div className={classes.loaderContainer}>
          <div className={classes.loader}>
            <div className={classes.loaderChild1} />
            <div className={classes.loaderChild2} />
          </div>
          <div className={classes.fetchingProducts}>
            Obteniendo productos...
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Loader;
