import React from 'react';
import { withRouter } from 'react-router';
// HOOKS
import { usePrevious } from 'lib/hooks';

const { useEffect } = React;

const ScrollToTop = ({ children, location }) => {
  const prevLocation = usePrevious(location.pathname);
  useEffect(() => {
    if (prevLocation && prevLocation !== location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, prevLocation]);
  return children;
};

export default withRouter(ScrollToTop);
