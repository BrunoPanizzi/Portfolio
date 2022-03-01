import { Container, Section, IntroSection } from './styles'

function Home() {
  return (
    <Container>
      <IntroSection>
        <h1>Lorem ipsum dolor sit amet</h1>
      </IntroSection>
      <Section color={'#191f42'} />
      <Section />
      <Section color={'#191f42'} />
    </Container>
  )
}

export default Home