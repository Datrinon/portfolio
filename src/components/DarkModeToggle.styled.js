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
  font-size: 1.25em;
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
  }

  & .moon {
    margin-left : 0.25em;
  }
`

export const Ticker = styled.div`
  width: ${FONT_SIZE};
  height: ${FONT_SIZE};
  /* temp color */
  background-color: #a3aaff; 
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${props => props.darkMode ? "translateX(150%)" : "translateX(0%)"};
  transition: transform 300ms;
  padding: 1px 0;
`