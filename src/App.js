import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import './App.css'

import Layout from "./Layout";
import Login from "./pages/Login";
import useToken from "./helper/useToken";

import { matchRoutes } from "react-router-dom";
import { RequestLicense } from "./pages/License/RequestLicense";
import { RenewLicense } from "./pages/License/RenewLicense";
import { CancelLicense } from "./pages/License/CancelLicense";
import { ChooseLicense } from "./pages/License/ChooseLicense";
import { TestTab } from "./ForTest-WaitDelete/TestTab";
import { ExportLabor } from "./pages/License/NewLicense/ExportLabor";
import { ShipLabor } from "./pages/License/NewLicense/ShipLabor";
import { DomesticLabor } from "./pages/License/NewLicense/DomesticLabor";
import { ForeignLabor } from "./pages/License/NewLicense/ForeignLabor";

const routes = [{ path: "/login" }];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};
/*
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}*/

function App() {
  //const token = getToken();

  const [login, setLogin] = useState(false);

  useEffect(() => {
    document.body.classList.remove("bg-body");

    if (document.body.classList.contains("bg-body")) {
      console.log("body tag contains class");
    }
  }, []);

  const { token, setToken } = useToken();

  if (token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ChooseLicense />} />
        <Route path="/chooseLicense" element={<ChooseLicense />} />
        <Route path="/requestlicense" element={<RequestLicense />} />
        <Route path="/renewlicense" element={<RenewLicense />} />
        <Route path="/cencellicense" element={<CancelLicense />} />
        <Route path="/foreign" element={<ForeignLabor />} />
        <Route path="/domestics" element={<DomesticLabor />} />
        <Route path="/exports" element={<ExportLabor />} />
        <Route path="/ships" element={<ShipLabor />} />


      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
