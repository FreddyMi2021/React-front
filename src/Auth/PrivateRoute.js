import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { decryptUser } from '../services/BaseUrl';

function PrivateRoute({ component: Component, ...rest }) {
  let user = JSON.parse(decryptUser(localStorage.getItem('currentUser')));

  return(
    <Route
      {...rest}
      render={props =>
        user && user.authData ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;