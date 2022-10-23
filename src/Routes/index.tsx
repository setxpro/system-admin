import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivatePage from "../Pages/Private";
import Template from "../Pages/Template";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Template>
            <PrivatePage />
          </Template>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
