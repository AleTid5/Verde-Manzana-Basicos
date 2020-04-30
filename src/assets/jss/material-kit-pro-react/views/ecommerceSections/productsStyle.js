import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  grayColor
} from "assets/jss/material-kit-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { successColor } from "assets/jss/material-kit-pro-react";

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginBottom: "0px !important",
    minHeight: "4vh !important",
    fontSize: "14px"
  },
  cardDescription: {
    color: grayColor[0],
    textAlign: "center"
  },
  container: {
    ...container
  },
  description: {
    color: grayColor[0],
    paddingTop: "10px",
    textAlign: "center",
    margin: 0
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: grayColor[22]
  },
  pullRight: {
    float: "right"
  },
  cardBody: {
    padding: "0.9375rem 1.875rem 0"
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none"
    },
    "& a": {
      display: "block"
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important"
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block"
    }
  },
  priceSlider: {
    fontWeight: "500"
  },
  refineButton: {
    margin: "-3px 0"
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  textLeft: {
    textAlign: "left"
  },
  flex: {
    display: "flex"
  },
  middleWidth: {
    width: "50%"
  },
  textRight: {
    textAlign: "right",
    marginTop: "20px"
  },
  loaderContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000c",
    position: "absolute",
    zIndex: 10,
    color: "white"
  },
  loader: {
    display: "inline-block",
    position: "relative",
    width: "80px",
    height: "80px",
    marginTop: "30%",
    left: "45%"
  },
  loaderChild1: {
    position: "absolute",
    border: "4px solid #fff",
    opacity: 1,
    borderRadius: "50%",
    animation: `$loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`
  },
  loaderChild2: {
    animationDelay: "-0.5s"
  },
  "@keyframes loader": {
    "0%": { top: "36px", left: "36px", width: 0, height: 0, opacity: 1 },
    "100%": { top: 0, left: 0, width: "72px", height: "72px", opacity: 0 }
  },
  fetchingProducts: {
    position: "relative",
    marginLeft: "calc(45% - 35px)"
  },
  blueBadge: {
    backgroundColor: "#3483fa",
    padding: "7px 12px"
  },
  dropdownLimit: {
    margin: "25px 0"
  },
  radioChecked: {
    ...customCheckboxRadioSwitch.radioChecked,
    border: `1px solid ${successColor[0]}`,
    color: `${successColor[0]} !important`
  },
  carouselPictureContainer: {
    height: "200px"
  },
  carouselPicture: {
    height: "100%",
    objectFit: "contain",
    borderRadius: "5px"
  }
};

export default styles;
