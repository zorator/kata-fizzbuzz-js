const FizzBuzz = require('./index.js')

test('Should print the FizzBuzz for a very simple case', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.render()).toBe("0");
});
