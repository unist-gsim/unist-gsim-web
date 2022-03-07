import React from "react";
import styled from "styled-components";
import { lengths } from "../values";

const ContainerBox = styled.div`
  padding: 0 1rem;
  margin: 0 auto;

  width: 100%;
  max-width: ${lengths.containerWidth};
`;

type Props = {};

export default function Container({
  children,
}: React.PropsWithChildren<Props>) {
  return <ContainerBox>{children}</ContainerBox>;
}
