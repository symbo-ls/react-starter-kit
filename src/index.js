'use strict'

import DOM from '@rackai/domql'
import React from 'react'
import ReactDOM from 'react-dom'

import { SquareButton, Icon } from '@rackai/symbols'
import { createSymbol } from './symbol'

const Button = {
  proto: SquareButton,
  props: {
    icon: 'no-icon'
  },
  text: 'asddsa'
}

// const symbol = DOM.create(SquareButton)
// const Symbol = createSymbol(symbol)

const Symbol = createSymbol(Button)

// const symbol = createSymbol(SquareButton)
console.log(Symbol)

var e = React.createElement

function TodoItem() {
  return e("li", null, "Todo Item")
}

function TodoApp() {
  return e("div", null, [
    e("h1", { key: "title" }, "To Do List"),
    e("ul", { key: "todos" }, [
      e(TodoItem, { key: "item1" }),
      e(TodoItem, { key: "item2" })
    ]),
    Symbol
  ]);
}

ReactDOM.render(e(TodoApp), document.getElementById("root"))
// ReactDOM.render(Symbol, document.getElementById("root"))
// ReactDOM.render((<Symbol/>), document.getElementById("root"))
