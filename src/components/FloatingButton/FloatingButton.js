import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-pro-react/components/floatingButtonStyle";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function FloatingButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button
        justIcon
        round
        color="warning"
        className={classes.mercadoLibreButton}
        {...props}
      >
        &nbsp;
      </Button>
    </div>
  );
}
