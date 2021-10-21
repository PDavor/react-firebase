import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.auth.value);
  console.log("user", user);
  return (
    <Route
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
