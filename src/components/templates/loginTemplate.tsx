import React from 'react'

import { Section, Container, Title, Subtitle } from 'bloomer'
import { Navigation, Footer, LoginBox } from '../organisms'

export default () => {
  return (
    <div className="App">
      <Navigation />
      <Section>
        <Container>
          <Title>Login</Title>
          <LoginBox />
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
