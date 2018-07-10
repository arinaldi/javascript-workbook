const assert = require('assert');

// Find the last element of a list.

const last = (list) => {
  // const last = arguments[arguments.length - 1];
  return list[list.length - 1];
}

describe('last', () => {
  it('finds the last element of an array', () => {
    assert.equal(last([1, 2, 3, 4]), 4);
  });

  it('finds the last character of a string', () => {
    assert.equal(last('xyz'), 'z');
  });

  // it('finds the last argument', () => {
  //   assert.equal(last(1, 2, 3, 4), 4);
  // })
});
