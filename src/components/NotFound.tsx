import React from "react";
import Container from "./Container";
import Content from "./Content";

type Props = {};

export default function NotFound(props: Props) {
  return (
    <Container>
      <Content>요청하신 페이지를 찾을 수 없습니다.</Content>
    </Container>
  );
}
