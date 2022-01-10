import styled from 'styled-components';
import { device } from '../_styled/breakpoints.style';
import colors from '../_styled/colors.styled';

export const Header = styled.header`
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
    right: ${props => props.menuOpen ? "initial" : "100%"}
  }

  & .left-end {

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
`

export const MenuToggleButton = styled.button`
  all: unset;
`