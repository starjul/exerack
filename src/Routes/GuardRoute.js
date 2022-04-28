import React from "react";
import { Route, useNavigate } from "react-router-dom";

const GuardRoute = ({ auth, element: Component, ...rest }) => {

  const Navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return <Navigate to={"/login"} />;
        }
      }}
    />
  );
};

export default GuardRoute;
