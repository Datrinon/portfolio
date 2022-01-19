import styled from 'styled-components';
import { palette } from './_styled/colors.styled';

const FONT_SIZE = "1em";

export const Container = styled.div`
`

export const DarkModeButton = styled.button`
  all: unset;
  position: relative;
  border: 1px solid;
  border-color: inherit;
  margin: 0 auto;
  background-color: #525252;
  /* use flex properties to avoid overflow of spans */
  display: flex;
  flex-wrap: nowrap;
  border-radius: 1em;
  padding: 1px 3px;
  font-size: 1.15em;
  cursor: pointer;

  & .icon {
    position: relative;
    z-index: 1;
  }

  & .selected-indicator {
    z-index: 0;
  }
`

export const Icon = styled.span`
  color : ${props => props.darkMode ? "initial" : palette.marble};

  & .sun {
    margin-right: 0.25em;
    position: relative;
  }

  & .moon {
    margin-left : 0.25em;
    position: relative;
    left: 2px;
  }
`


export const Ticker = styled.div`
  background-color: ${palette.sunrayGold}; 
  width: 32px;
  height: 31px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -2px;
  border: 1px solid black;
  transform: translateY(-50%) ${props => props.darkMode ? "translateX(100%)" : "translateX(0%)"};
  transition: transform 300ms;
  padding: 1px 0;
`