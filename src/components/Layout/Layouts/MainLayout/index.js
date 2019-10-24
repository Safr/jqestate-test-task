import * as React from 'react';
import ScrollToTop from 'lib/components/ScrollToTop';
import { Content, Grid, InnerContent } from './MainLayout.module.scss';
// HELPERS

// EXPORTED COMPONENT
const MainLayout = ({ children, ...rest }) => {
  return (
    <ScrollToTop>
      <div className={Content}>
        <div className={Grid}>
          <div className={InnerContent}>
            {React.cloneElement(children, { ...rest })}
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default MainLayout;
