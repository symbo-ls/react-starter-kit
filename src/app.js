'use strict'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { Button, DatePicker, Input, Flex } from '@symbo.ls/react'

function App () {
  const [text, setText] = useState('test text')
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
    <Flex flow="column" gap="A">
      <Input value={text.length} setText={setText} onInput={e => setText(e.target.value) } />
      <Button text={text.length} setText={setText} theme="primary" size='B' padding="Z B" round="C">
        <span>{text} and lenght: </span>
      </Button>
    </Flex>
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

