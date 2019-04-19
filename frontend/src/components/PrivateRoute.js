import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, is_authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        is_authed ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

function mapStateToProps(state) {
  return { is_authed: Boolean(state.user) };
};

export default connect(mapStateToProps)(PrivateRoute);
