import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`

export const Section = styled.section`
  height: 100%;
  padding-top: 3rem;
  background: ${({ color }) => color};
  scroll-snap-align: start;
`

export const IntroSection = styled(Section)`
  display: grid;
  
`