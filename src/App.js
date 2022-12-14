import React, {useState} from "react";
import "./assets/scss/themes.scss";
import { Header } from "./Menu/Header";
import SideBar from "./Menu/Sidebar";

function App() {
  const [headerClass, setHeaderClass] = useState("");
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header />
        <SideBar />
      </div>
    </React.Fragment>
  );
}

export default App;
