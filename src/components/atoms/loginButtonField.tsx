/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Field, Control, Button } from 'bloomer'

export default props => {
  return (
    <Field>
      <Control>
        <Button onClick={() => props.handleEvent()} className="is-fullwidth">
          {props.title}
        </Button>
      </Control>
    </Field>
  )
}
