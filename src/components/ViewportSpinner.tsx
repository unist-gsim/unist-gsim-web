import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../values";

const ViewportShade = styled.div`
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  background-color: ${colors.black}aa;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 650;
`;

const SpinnerBox = styled.div`
  flex: 0 0 auto;
`;

type Props = {};

export default function ViewportSpinner(props: Props) {
  return (
    <ViewportShade>
      <SpinnerBox>
        <CircularProgress />
      </SpinnerBox>
    </ViewportShade>
  );
}
