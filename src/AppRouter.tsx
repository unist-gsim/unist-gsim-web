import React from "react";
import { Route, Routes } from "react-router-dom";
import Static from "./components/Static";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Static />} />
    </Routes>
  );
}

export default AppRouter;
