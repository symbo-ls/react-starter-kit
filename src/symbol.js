'use strict'

import React from 'react'
import DOM from '@rackai/domql'
import { isMethod } from '@rackai/domql/src/element/methods'
import { registry } from '@rackai/domql/src/element/mixins'
import { applyPrototype } from '@rackai/domql/src/element/proto'
import { isObject, createID, deepMerge, exec } from '@rackai/domql/src/utils'
import createState from '@rackai/domql/src/element/createState'
import createProps from '@rackai/domql/src/element/createProps'
import { throughInitialDefine } from '@rackai/domql/src/element/iterate'

const transformer = el => {
  const protoed = applyPrototype(el)
  return protoed
}

const createElement = element => {
  const { tag, props, ...el } = element
  const children = []
  const state = element.state = createState(element)

  const appliedProps = createProps(element)
  const stackProps = {}

  // enable EXEC
  if (!element.__exec) element.__exec = {}

  // enable CACHING
  if (!element.__cached) element.__cached = {}

  // iterate through define
  if (isObject(element.define)) throughInitialDefine(element)

  for (const prop in el) {
    const thing = el[prop]
    if (isMethod(prop) || isObject(registry[prop])) {
      continue
    }

    const hasDefined = element.define && element.define[prop]
    if (registry[prop]) {
      stackProps[prop === 'class' ? 'className' : prop] = exec(thing, el)
    } else if (hasDefined) {
      stackProps[prop] = thing
    } else {
      const sub = recursiveElement(thing)
      children.push(sub)
    }
  }

  deepMerge(props, stackProps)
  return React.createElement(tag || 'div', props, children)
}

export const recursiveElement = (el, k) => {
  const protoed = applyPrototype(el)
  const key = key || createID.next().value
  if (!el.props) el.props = { key }
  else if (!el.props.key) el.props.key = key
  return createElement(el)
}

export const createSymbol = el => {
  return recursiveElement(el)
}
