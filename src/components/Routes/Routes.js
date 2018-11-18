import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
const LandingPage  = lazy(() => import('../../modules/public/LandingPage'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
         <Route
         path="/" 
         render={()=> {
           return <LandingPage />;
         }}
       />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object,
}

export default Routes;