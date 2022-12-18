import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";

import Layout from "./Layout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import useToken from "./helper/useToken";

import { matchRoutes } from "react-router-dom";

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
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
