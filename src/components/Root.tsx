import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

type Props = {};

export default function Root({ children }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Routes>
        <Route path="pads/*" />
        <Route path="*" element={<Header />} />
      </Routes>
      {children}
    </>
  );
}
