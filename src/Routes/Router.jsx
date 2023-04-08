import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Contact from "./Contact";
import Detail from "./Detail";
import Favs from "./Favs";
import Home from "./Home";

export const Router = () => {
  return (
    <Routes>
      {/* Aqui deberias renderizar las rutas */}
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Route>
    </Routes>
  );
};
