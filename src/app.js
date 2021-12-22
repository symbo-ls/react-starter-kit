'use strict'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { Button, DatePicker, Input, Flex, SquareButton } from '@symbo.ls/react'

function App () {
  const [text, setText] = useState('test text')
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} /> {text.length}
    <Flex flow="column" gap="A">
      <Input value={text.length} onInput={e => setText(e.target.value) } />
      <Button text={text.length} theme="primary" size='B' padding="Z B" round="C">
        <span>{text} and lenght: </span>
      </Button>
    </Flex>

    <DatePicker></DatePicker>

    <SquareButton />
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

