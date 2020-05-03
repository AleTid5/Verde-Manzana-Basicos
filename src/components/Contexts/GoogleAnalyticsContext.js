import React from "react";
import GoogleAnalytics from "react-ga";
import PropTypes from "prop-types";

export const GoogleAnalyticsContext = React.createContext();

const { Provider } = GoogleAnalyticsContext;

export const GoogleAnalyticsProvider = ({ children }) => {
  const trackingId = "UA-165238070-1";
  GoogleAnalytics.initialize(trackingId);

  const pushEvent = (category, action) =>
    GoogleAnalytics.event({
      category,
      action
    });

  return (
    <Provider
      value={{
        pushEvent
      }}
    >
      {children}
    </Provider>
  );
};

GoogleAnalyticsProvider.propTypes = {
  children: PropTypes.node
};

GoogleAnalyticsProvider.defaultProps = {
  children: null
};
