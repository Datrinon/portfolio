import styled from 'styled-components';
import { device } from '../_styled/breakpoints.styled';
import { standard } from '../_styled/colors.styled';

export const Header = styled.header`
  /* This is the CSS for a vertically spanning sidebar header. */
  position: sticky;
  background-color: inherit;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;

  & .menu {
    position: absolute;
    background-color: inherit;
    width: 50%;
    height: 100vh;
    transform: ${props => props.menuOpen ? "translateX(100%)" : "initial"};
    right: 100%;
    /* TODO */
    /* This is causing flashes on resizing. */
    /* Solved -- solution was to make it hidden by default, then only USE transform when it's open */
    transition: transform 300ms;
  }

  & .logo {
    align-self: center;
  }

  & .logo svg {
    width: 30px;
    height: 28px;
    transform: scale(1.35);
    position: relative;
    left: 5px;
  }

  & .left-end, .right-end {
    height: 100%;
  }

  /* This is the CSS for a horizontally spanning header. */
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .menu-toggle-button {
      visibility: hidden;
    }

    & .menu {
      all : unset;
    }

    & .nav-links .page-sections {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    & .logo svg {
      all: unset;
      width: 48px;
      height: 48px;
    }
  }


`

export const LogoContainer = styled.div`
  margin: 0 0.25em;
  display: flex;
  flex-direction: row;

  & > * {
    margin: 0 0.25em;
  }
`

export const NameHeading = styled.h1`
  font-size: 2rem;
  flex: 0 0 auto;
`

export const MenuToggleButton = styled.button`
  all: unset;
  cursor: pointer;
`

export const Menu = styled.div`
  & .nav-links .page-sections li {
    margin: 1em 0.5em;
    font-size: 120%;
    /* margin: 0 0.25em; */
  }
`

export const StyledHeaderLink = styled.a`
  text-decoration: none;
  font-weight: 400;
`