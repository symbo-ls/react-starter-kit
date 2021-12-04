'use strict'


import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import '@domql/emotion'
import { Button } from '@symbo.ls/react'

function App () {
  const [text, setText] = useState('test text')
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
    <Button text={text.length} setText={setText} size='C' padding="A">
      <span>{text} and lenght: </span>
    </Button>
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

