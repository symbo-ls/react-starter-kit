'use strict'


import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import '@domql/emotion'
import { Button, DatePicker } from '@symbo.ls/react'

function App () {
  const [text, setText] = useState('test text')
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
    {/* <DatePicker size='C' padding="A" /> */}
    <Button text={text} setText={setText} theme="" size="C" padding="A">
      <span>{text}</span>
    </Button>
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

