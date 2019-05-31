/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Footer, Container, Content, Columns, Column } from 'bloomer'

export default () => {
  return (
    <Footer id="footer" css={style}>
      <Container>
        <Content>
          <Columns>
            <Column>Footer</Column>
          </Columns>
          <Content isSize="small">Footer</Content>
        </Content>
      </Container>
    </Footer>
  )
}

const style = css({
  background: '#ccc',
})
