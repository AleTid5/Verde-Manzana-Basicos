const styles = {
  buttonContainer: {
    position: "fixed",
    color: "white",
    bottom: "15px",
    animation: "$move 2s"
  },
  mercadoLibreButton: {
    backgroundImage:
      "url(https://http2.mlstatic.com/ui/navigation/5.6.0/mercadolibre/favicon.ico)",
    backgroundSize: "cover",
    backgroundColor: "#ffd103",
    boxShadow:
      "0 2px 2px 0 #ffd103, 0 3px 1px -2px #ffd103, 0 1px 5px 0 #ffd103",
    "&:hover": {
      boxShadow:
        "0 2px 2px 0 #ffd103, 0 3px 1px -2px #ffd103, 0 1px 5px 0 #ffd103",
      backgroundColor: "#ffd103",
      filter: "brightness(0.9)"
    },
    animation: "$pulsate 1.6s ease-out",
    animationIterationCount: "infinite",
    "&:focus": {
      backgroundColor: "#ffd103",
      boxShadow:
        "0 2px 2px 0 #ffd103, 0 3px 1px -2px #ffd103, 0 1px 5px 0 #ffd103"
    }
  },
  "@keyframes move": {
    "0%": {
      bottom: "-50px"
    },
    "100%": {
      bottom: "15px"
    }
  },
  "@keyframes pulsate": {
    "0%": {
      boxShadow: "0 0 0 #ffd103"
    },
    "50%": {
      boxShadow: "0 0 15px #ffd103"
    },
    "100%": {
      boxShadow: "0 0 0 #ffd103"
    }
  }
};

export default styles;
