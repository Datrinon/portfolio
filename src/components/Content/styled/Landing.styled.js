import styled from 'styled-components'

export const Landing = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;

  & .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  & .vignette {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 150px black;
  }
`

export const LandingCaption = styled.div`
  position: absolute;
  bottom: 15%;
  left: 15%;
  border: 1px solid white;
  width: 15vw;
  height: 20vh;
  padding: 1em;
  background-color: white;
`