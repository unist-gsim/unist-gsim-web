import React from "react";
import { Route, Routes } from "react-router-dom";
import Pythonpad from "./components/Pythonpad";
import Static from "./components/Static";

function AppRouter() {
  return (
    <Routes>
      <Route path="pads/:padId" element={<Pythonpad />} />
      <Route path="*" element={<Static />} />
    </Routes>
  );
}

export default AppRouter;
