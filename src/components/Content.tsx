import React from "react";
import styled from "styled-components";
import { colors, lengths } from "../values";

const ContentBox = styled.div`
  padding: 1.5rem 0;

  width: 100%;

  line-height: 1.8em;

  @media screen and (max-width: ${lengths.mobileMax}) {
    padding: 1rem 0;
  }

  & a {
    color: ${colors.blue};
  }

  & a:hover {
    text-decoration: underline;
  }

  & code {
    color: ${colors.darkBlue};
  }

  & img {
    max-width: 20rem;
  }

  & blockquote {
    padding: 0.3rem 1rem;
    background-color: ${colors.lightGray};
    border-left: 5px solid ${colors.gray};
  }
`;

type Props = {};

export default function Container({
  children,
}: React.PropsWithChildren<Props>) {
  return <ContentBox>{children}</ContentBox>;
}
