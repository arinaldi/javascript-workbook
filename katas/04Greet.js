const assert = require('assert');

// Correct this code, so that the greet function returns the expected value.

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}

describe('greet', () => {
  it('outputs the correct greeting', () => {
    const john = new Person('John');
    assert.equal(john.greet('Jane'), 'Hi Jane, my name is John');
  });
});
