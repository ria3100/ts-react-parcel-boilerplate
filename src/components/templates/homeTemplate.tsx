/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Section, Container } from 'bloomer'
import { Main, Footer, Navigation } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Main />
      <Section>
        <Container>content</Container>
      </Section>
      <Footer />
    </Fragment>
  )
}
