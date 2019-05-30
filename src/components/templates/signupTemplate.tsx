import React from 'react'

import { Section, Container, Title, Subtitle } from 'bloomer'
import { Navigation, Footer, SignupBox } from '../organisms'

export default () => {
  return (
    <div className="App">
      <Navigation />
      <Section>
        <Container>
          <Title>Signup</Title>
          <SignupBox />
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
