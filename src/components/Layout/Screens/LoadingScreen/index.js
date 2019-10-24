import React from 'react';
import Spinner from 'components/UI/Spinner';
import { Content } from './LoadingScreen.module.scss';

// EXPORTED COMPONENT
const LoadingScreen = () => (
  <div className={Content}>
    <Spinner />
  </div>
);

export default LoadingScreen;
