import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [loggedUser,setloggedUser]=useContext(UserContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedUser.name ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/register",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

export default PrivateRoute;