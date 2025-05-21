/* eslint-env mocha */

import assert from 'node:assert/strict'
import { test } from 'node:test'
import unorm from 'unorm'

import { compare, normalize } from './index.js'

test('compare', () => {
  assert(compare('test', 'test') === 0)
  assert(compare('test', 'Test') === 0)
  assert(compare('Test', 'test') === 0)
  assert(compare('test2', 'test1') > 0)
  assert(compare('test1', 'test2') < 0)
  assert(compare('Hellö', 'Hello') > 0)
  assert(compare('Hello', 'Hellö') < 0)
  assert(compare('abc', 'abcd') < 0)
  assert(compare('abcd', 'abc') > 0)
  assert(compare('BBB', 'aaa') > 0)
  assert(compare('BBB', 'ccc') < 0)
  assert(compare('Ϧaa', 'ϧaa') === 0)
  assert(compare('ϧaa', 'Ϧaa') === 0)
})

test('normalize', () => {
  assert.equal(normalize, unorm.nfd)
})
