import styled from 'styled-components';
import { device } from '../_styled/breakpoints.styled';
import colors from '../_styled/colors.styled';

export const Header = styled.header`
  /* This is the CSS for a vertically spanning sidebar header. */
  position: sticky;
  border: 1px solid ${colors.ORANGE};
  background-color: inherit;
  top: 0;
  left: 0;
  width: 100%;

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

  /* This is the CSS for a horizontally spanning header. */
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

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
  font-size: 3rem;
  flex: 0 0 auto;
`

export const MenuToggleButton = styled.button`
  all: unset;
  cursor: pointer;
`

export const Menu = styled.div`
  & .nav-links .page-sections li {
    margin: 1em 0.5em;
    font-size: 1.25em;
    /* margin: 0 0.25em; */
  }
`

export const StyledHeaderLink = styled.a`
  text-decoration: none;
  font-weight: bold;
`