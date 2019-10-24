/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
// COMPONENTS
import { ErrorScreen, LoadingScreen } from 'components/Layout/Screens';
import { MainLayout } from 'components/Layout/Layouts';

const MainTemplate = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <ErrorScreen>
        <MainLayout {...props}>
          <Component
            {...props}
            {...rest}
            fallback={<LoadingScreen {...props} />}
          />
        </MainLayout>
      </ErrorScreen>
    )}
  />
);

export default MainTemplate;
