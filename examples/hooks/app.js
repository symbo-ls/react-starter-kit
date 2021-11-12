'use strict'

import 'regenerator-runtime/runtime'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import DOM from '@rackai/domql'
import { Button as B, Icon, Notification } from '@rackai/symbols'
import '@rackai/domql/packages/emotion'
import clone from 'clone'

import '@symbols/config/dist/main.js'

const Button = {
  proto: B,
  text: 'Button',
  on: { click: (el, ev, s) => { el.props.setText(el.props.text+1) } }
}

function rend (node, props) {
  DOM.create({
    proto: Button,
    props: clone(props)
  }, node)
}

const Counter = (props, state) => {
  const ref = useRef(null)
  return <React.Fragment ref={ref}>
    {props.text}
    {
      useEffect(() => {
        rend(ref.current, props)
      })
    }
  </React.Fragment>
}

function App () {
  const [text, setText] = useState(0)
  return <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
    <Counter text={text} setText={setText} size='A' padding="A" />
  </>
}

ReactDOM.render(<App />, document.getElementById("root"));

