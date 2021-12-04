'use strict'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@symbo.ls/react'

function App () {
  const [text, setText] = useState(0)
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
    <Button text={text} setText={setText} size='C' padding="A" />
  </>
}

ReactDOM.render(<App />, document.getElementById("app"));

