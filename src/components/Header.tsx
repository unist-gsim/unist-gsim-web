import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, lengths } from "../values";

const FixedBox = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 600;
`;

const Placeholder = styled.div`
  height: 5rem;

  @media screen and (max-width: ${lengths.tabletMax}) {
    height: 5rem;
  }

  @media screen and (max-width: ${lengths.mobileMax}) {
    height: 3.75rem;
  }
`;

const HeaderRow = styled.header`
  background-color: ${colors.black};
  width: 100%;
  height: 5rem;
  transition: all 0.5s ease;

  color: ${colors.white};

  @media screen and (max-width: ${lengths.tabletMax}) {
    height: 5rem;
  }

  @media screen and (max-width: ${lengths.mobileMax}) {
    height: 3.75rem;
  }

  &.scrolled {
    background-color: ${colors.black}ee;
    height: 5rem;

    @media screen and (max-width: ${lengths.mobileMax}) {
      height: 3.75rem;
    }
  }
`;

const SlotsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  width: 100%;
  max-width: ${lengths.containerWidth};
`;

const Slot = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex: 0 0 auto;

  &.from-desktop {
    @media screen and (max-width: ${lengths.tabletMax}) {
      display: none;
    }
  }

  &.from-tablet {
    @media screen and (max-width: ${lengths.mobileMax}) {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 9rem;
  height: auto;

  @media screen and (max-width: ${lengths.mobileMax}) {
    width: 7.5rem;
  }
`;

const FlatLink = styled.a`
  display: block;
  background-color: transparent;
  border-radius: 5px;

  padding: 1rem 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;

  font-size: 1.125rem;
  color: ${colors.white};

  transition: all 0.5s ease;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: ${colors.gray}22;
  }
`;

type Props = {};
type State = {
  scrolled: boolean;
};

export default class Header extends React.Component {
  state: State = {
    scrolled: false,
  };

  // handleScrollTo = (eid: string) => {
  //   const element = document.querySelector(`#${eid}`);
  //   if (element) {
  //     if (eid === "contact") {
  //       element.scrollIntoView({
  //         block: "center",
  //         behavior: "smooth",
  //       });
  //     } else {
  //       const headerOffset = 100;
  //       const elementPosition = element.getBoundingClientRect().top;
  //       const offsetPosition =
  //         elementPosition + window.pageYOffset - headerOffset;
  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };

  handleScroll = () => {
    const top = window.scrollY;
    if (!this.state.scrolled && top > lengths.scrollThreshold) {
      this.setState({ scrolled: true });
    } else if (this.state.scrolled && top <= lengths.scrollThreshold) {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrolled } = this.state;

    return (
      <>
        <Placeholder />
        <FixedBox>
          <HeaderRow className={scrolled ? "scrolled" : ""}>
            <SlotsWrapper>
              <Slot>
                <Link to="/">
                  <Logo src="/images/logo.png" />
                </Link>
              </Slot>
              <Slot className="from-tablet">
                {/* <FlatLink onClick={() => {}}>
                  Link
                </FlatLink> */}
              </Slot>
            </SlotsWrapper>
          </HeaderRow>
        </FixedBox>
      </>
    );
  }
}
