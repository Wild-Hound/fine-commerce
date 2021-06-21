import React from "react";
import { Redirect, Route } from "react-router";
import MainNav from "../AppNav/MainNav";

function ProtectedRoute({
  isAuth,
  component: Component,
  admin = false,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return (
            <>
              <MainNav />
              <Component />
            </>
          );
        } else {
          if (admin) {
            return (
              <Redirect
                to={{
                  pathname: "/admin_login",
                  state: { from: props.location },
                }}
              />
            );
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
        }
      }}
    />
  );
}

export default ProtectedRoute;
