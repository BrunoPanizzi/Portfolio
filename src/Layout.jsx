import { Container } from './LayoutStyles'

import { Header } from './components'
import Navigation from './Navigation'


function Layout() {
  return (
    <Container>
      <Header />
      <Navigation />
    </Container>
  )
}

export default Layout