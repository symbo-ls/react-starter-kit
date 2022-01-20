'use strict'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PATH from 'path'

import { Button, Grid, Notification, DatePicker, Input, Flex } from '@symbo.ls/react'
import { DOMQLReact } from '@domql/transform-react'

export const Test = (props, state) => {
  return DOMQLReact({
    // button: Button,
    asd: 'asd',
    text: 'Test'
  }, props, state)
}

function App () {
  const [text, setText] = useState('test text')
  return <>
    {/* <input type="text" value={text} onChange={e => setText(e.target.value)} /> */}
    {/* <Flex flow="column" gap="A">
      <Input value={text.length} onInput={e => setText(e.target.value) } />
      <Button text={text.length} onClick={e => setText('Reset')} theme="primary" size='B' padding="Z B" round="C">
        <span>{text} and lenght: </span>
      </Button>
    </Flex>

    <Grid>
      <Notification theme="primary" />
      <Notification theme="primary">
        asd
      </Notification>
    </Grid> */}

    <Test />
    {/* <Test>AA {text}</Test> */}
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

// console.log(process.cwd())
// console.log(__dirname)
// console.log(PATH)
// console.log(import.meta)