const fizzBuzz = require('./index.js')

describe('FizzBuzz function', () => {

    test('Should print the FizzBuzz for a very simple case', () => {
        expect(fizzBuzz(0)).toEqual([]);
    });

    test('Should print fizz for 3', () => {
        const result = fizzBuzz(3);
        expect(result[2]).toEqual('fizz');
    });

    test('Should print buzz for 5', () => {
        const result = fizzBuzz(5);
        expect(result[4]).toEqual('buzz');
    });

    test('Should print fizzbuzz for 15', () => {
        const result = fizzBuzz(15);
        expect(result[14]).toBe('fizzbuzz');
    });

    describe('FizzBuzz of 100', () => {

        const buildDataSet = (size, modulo, excludedValues) =>
            [...Array(size + 1).keys()]
                .slice(1).map(i => i * modulo)
                .filter(i => !excludedValues.includes(i))


        const testValue = (numbers, expected, receivedValues) => {
            numbers.forEach(number => {
                let receivedValue = receivedValues[number - 1];
                expect(receivedValue, `Value for ${number} should be ${expected}, but was ${receivedValue}`)
                    .toBe(expected)
            })
        }
        // fizzBuzz result for 100 values
        const result = fizzBuzz(100);
        // numbers that should be resulting in a 'fizzbuzz' value
        const fizzBuzzNumbers = [15, 30, 45, 60, 75, 90]
        // numbers that should be resulting in a 'fizz' value
        const fizzNumbers = buildDataSet(33, 3, fizzBuzzNumbers)
        // numbers that should be resulting in a 'buzz' value
        const buzzNumbers = buildDataSet(20, 5, fizzBuzzNumbers)
        // all numbers except the previous ones (for fizz, buzz and fizzbuzz)
        const others = buildDataSet(100, 1, [
            ...fizzNumbers, ...buzzNumbers, ...fizzBuzzNumbers
        ])

        test('Should print correct fizz', () => {
            testValue(fizzNumbers, 'fizz', result)
        });
        test('Should print correct buzz', () => {
            testValue(buzzNumbers, 'buzz', result)
        });
        test('Should print correct fizzbuzz', () => {
            testValue(fizzBuzzNumbers, 'fizzbuzz', result)
        });
        test('Should print numbers if not a multiple of 3 or 5', () => {
            others.forEach(number => {
                expect(result[number - 1]).toEqual(number)
            })
        });
    })
})
