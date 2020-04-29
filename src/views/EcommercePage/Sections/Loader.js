import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
const useStyles = makeStyles(styles);

const withLoader = Component => props => {
  const [isLoading, setIsLoading] = React.useState(false);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.loaderContainer}></div>
      <Component {...props} setIsLoading={setIsLoading} />
    </div>
  );
};

export default withLoader;
