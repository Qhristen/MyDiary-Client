import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
const  LandingPage = lazy(() => import('../../modules/public/LandingPage'));


const Routes = () => {
  return (
      <Switch>
         <h1> Welcome to my diary front-end</h1>
      </Switch>
      
  );
};

Routes.propTypes = {
  location: PropTypes.object,
}

export default Routes;