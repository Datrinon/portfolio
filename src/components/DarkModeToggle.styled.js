import styled from 'styled-components';

const FONT_SIZE = "1em";

export const Container = styled.div`
`

export const DarkModeButton = styled.button`
  all: unset;
  position: relative;
  border: 1px solid;
  border-color: inherit;
  margin: 0 auto;
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
  color : ${props => props.darkMode ? "initial" : "grey"};

  & .sun {
    margin-right: 0.25em;
    position: relative;
    right: 1px;
  }

  & .moon {
    margin-left : 0.25em;
    position: relative;
    left: 2px;
  }
`

export const Ticker = styled.div`
  width: 27px;
  height: 26px;
  /* temp color */
  background-color: #a3aaff; 
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 1px;
  transform: translateY(-50%) ${props => props.darkMode ? "translateX(125%)" : "translateX(0%)"};
  transition: transform 300ms;
  padding: 1px 0;
`