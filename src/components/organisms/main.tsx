import React from 'react'

import { Hero, HeroBody, Title, Container } from 'bloomer'

export default () => {
  return (
    <Hero isColor="info" isSize="medium">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Main Hero</Title>
        </Container>
      </HeroBody>
    </Hero>
  )
}
