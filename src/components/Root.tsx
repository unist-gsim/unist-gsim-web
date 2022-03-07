import React from "react";
import Header from "./Header";

type Props = {};

export default function Root({ children }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
