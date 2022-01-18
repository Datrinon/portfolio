import styled from 'styled-components';
import { HEADING_SIZE } from '../../_styled/sizes.styled';


export const FooterContainer = styled.div`
  padding: 2em 0;
  background-color: rgb(34,34,34);
  color: white;
  text-align: center;

  & .contact-links {
    margin: 0.5em 0 1.5em 0;
  }

  & .contact-link {
    font-size: 2.5em;
    border: 1px solid;
    padding: 3px 10px;
    border-radius: 50%;
    color: inherit;
    margin: 0 0.5em;

    & svg {
      position: relative;
      top: 8px;
    }
  }
`

export const FooterLink = styled.a`

`;