import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <HeaderComponent />
        <div className="container content">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/add-employee/:id"
              element={<CreateEmployeeComponent />}
            />
            {/* <Route
              path="/update-employee/:id"
              element={<UpdateEmployeeComponent />}
            ></Route> */}
            <Route
              path="/view-employee/:id"
              element={<ViewEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
