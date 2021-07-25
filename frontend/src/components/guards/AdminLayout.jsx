import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminGuardedRoute = ({ component: Component, ...rest }) => {
  const auth = localStorage.getItem("auth") || "";
  const role = localStorage.getItem("role") || "";
  return (
    <Route
      {...rest}
      render={(props) =>
        auth !== "" && role !== "" ? (
          <>
            <div className="wrapper">
              <Component {...props} />
            </div>
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminGuardedRoute;
