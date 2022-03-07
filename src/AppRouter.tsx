import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
