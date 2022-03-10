import Axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import Container from "./Container";
import Content from "./Content";
import NotFound from "./NotFound";
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

export default function Static(props: Props) {
  const location = useLocation();
  const [content, setContent] = useState("");
  const [failed, setFailed] = useState(false);

  const loadStaticFile = async () => {
    const filePaths = getStaticFilePaths(location.pathname);
    for (const filePath of filePaths) {
      try {
        const stampedFilePath = `${filePath}?ts=${new Date().getTime()}`;
        const response = await Axios.get(stampedFilePath);
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
    return <NotFound />;
  } else {
    return <ViewportSpinner />;
  }
}
