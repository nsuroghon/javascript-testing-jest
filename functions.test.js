const functions = require('./functions')
// npm test
// run npm testwatch - watch mode while in development

// To run before each test
// beforeEach( () => initDatabase());
// afterEach( () => closeDatabase());

// to run before and after all tests
// beforeAll( () => initDatabase());
// afterAll( () => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

// For certain group of text 
const nameCheck = () => console.log('Checking Name...')

describe('CheckingNames', () => { 
  beforeEach( () => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  })

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  })
})

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be John Doe object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'John',
    lastName: 'Doe'
  });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})

// Check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything than an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
