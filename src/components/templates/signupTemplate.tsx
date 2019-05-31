/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Section, Container, Title } from 'bloomer'
import { Navigation, Footer, SignupBox } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Section>
        <Container>
          <Title>Signup</Title>
          <SignupBox />
        </Container>
      </Section>
      <Footer />
    </Fragment>
  )
}
