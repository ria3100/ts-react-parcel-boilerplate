/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Content, Section, Container } from 'bloomer'
import { Main, Footer, Navigation } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Content>
        <Main />
        <Section>
          <Container>content</Container>
        </Section>
      </Content>
      <Footer />
    </Fragment>
  )
}
