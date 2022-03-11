import Axios from "axios";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { loadScript } from "../utils/script";
import ViewportSpinner from "./ViewportSpinner";

const Pad = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 0.875rem;
`;

type Params = {
  padId: string;
};
type Props = React.PropsWithChildren<{}>;

function Pythonpad(props: Props) {
  const padId = `${useParams<Params>().padId}`;
  const pad = useRef<HTMLDivElement>(null);

  const loadPad = async () => {
    if (pad.current) {
      const filePath = `/pads/${padId}.pypad.json`;
      const stampedFilePath = `${filePath}?ts=${new Date().getTime()}`;
      const response = await Axios.get(stampedFilePath);

      // @ts-ignore
      window.Pythonpad(pad.current, {
        ...response.data,
        id: padId,
        downloadable: true,
      });
    }
  };

  useEffect(() => {
    loadPad();
  }, []);

  return <Pad ref={pad} />;
}

export default class PythonpadLoader extends React.Component<Props> {
  state = {
    ready: false,
  };

  componentDidMount() {
    this.load();
  }

  async load() {
    await loadScript("vue", "https://cdn.jsdelivr.net/npm/vue@2.6.11");
    await loadScript(
      "pythonpad",
      "https://cdn.jsdelivr.net/gh/pythonpad/pythonpad.js@v0.1.37/lib/pythonpad.bundle.js"
    );
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    return ready ? <Pythonpad {...this.props} /> : <ViewportSpinner />;
  }
}
