import Axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import Container from "./Container";
import Content from "./Content";
import ViewportSpinner from "./ViewportSpinner";

type Props = {};

function getStaticFilePaths(pathname: string) {
  const paths = [];
  if (pathname === "/") {
    paths.push(`/static/index.md`);
  } else {
    paths.push(`/static${pathname}.md`);
    paths.push(`/static${pathname}/index.md`);
  }
  return paths;
}

export default function NotFound(props: Props) {
  const location = useLocation();
  const [content, setContent] = useState("");
  const [failed, setFailed] = useState(false);

  const loadStaticFile = async () => {
    const filePaths = getStaticFilePaths(location.pathname);
    for (const filePath of filePaths) {
      try {
        const response = await Axios.get(filePath);
        const content = response.data;
        setContent(content);
      } catch (err) {
        setFailed(true);
      }
    }
  };

  useEffect(() => {
    loadStaticFile();
  }, []);

  useEffect(() => {
    loadStaticFile();
  }, [location.pathname]);

  if (content) {
    return (
      <Container>
        <Content>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
      </Container>
    );
  } else if (failed) {
    return (
      <Container>
        <Content>요청하신 페이지를 찾을 수 없습니다.</Content>
      </Container>
    );
  } else {
    return <ViewportSpinner />;
  }
}
