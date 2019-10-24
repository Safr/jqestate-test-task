import * as React from 'react';
import { Link } from 'react-router-dom';
import { Content } from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={Content}>
      <div>
        <h1>Oops!</h1>
        <p>The page you are looking for doesn&apos;t exist</p>
        <Link to="/">Go Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
