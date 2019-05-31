/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Section, Container, Title } from 'bloomer'
import { Navigation, Footer, LoginBox } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Section>
        <Container>
          <Title>Login</Title>
          <LoginBox />
        </Container>
      </Section>
      <Footer />
    </Fragment>
  )
}
