import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeraGeneracion } from "../src/pages/primeraGeneracion";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { menuOptionsType } from "./interfaces/menuOptions";
import { SegundaGeneracion } from "./pages/segundaGeneracion";

function App() {
  const menuOptions: menuOptionsType = [
    { path: "primeraGen", label: "first Gen" },
    { path: "segundaGen", label: "second Gen" },
  ];
  return (
    <Router>
      <Layout menuOptions={menuOptions}>
        <Routes>
          <Route path="primeraGen" element={<PrimeraGeneracion />}></Route>
          <Route path="segundaGen" element={<SegundaGeneracion />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
