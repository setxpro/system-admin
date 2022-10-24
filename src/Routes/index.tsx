import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivatePage from "../Pages/Private";
import Template from "../Pages/Template";
import Security from "../Security";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Security>
            <Template>
              <PrivatePage />
            </Template>
          </Security>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
