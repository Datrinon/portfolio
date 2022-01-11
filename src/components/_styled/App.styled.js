import styled from "styled-components";

import COLOR from "./colors.styled";

export const Page = styled.div`
  background-color: ${props => props.darkMode ? COLOR.BLACK : "white"};
  color: ${props => props.darkMode ? "white" : "black"};

`