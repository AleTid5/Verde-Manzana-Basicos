import { cardTitle, title } from "assets/jss/material-kit-pro-react.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const sectionPillsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "0"
  },
  textCenter: {
    textAlign: "center"
  },
  category: {
    color: "#FFFFFF !important",
    marginTop: "10px"
  },
  cardTitle: {
    ...cardTitle,
    color: "#FFFFFF !important"
  },
  icons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "4px",
    verticalAlign: "middle"
  },
  tabSpace: {
    padding: "20px 0 50px"
  },
  titleSpecial: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default sectionPillsStyle;
