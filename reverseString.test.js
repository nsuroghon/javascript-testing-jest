const reverseString = require('./reverseString');

// test if exists
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reversed with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});