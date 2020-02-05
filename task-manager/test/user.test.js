const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async() => {
  const response = await request(app).post('/users').send({
    name: 'Diego',
    email: 'diego.ono1505@example.com',
    password: 'mypass1234'
  }).expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: 'Diego',
      email: 'diego.ono1505@example.com'
    },
    token: user.tokens[0].token
  });

  expect(user.password).not.toBe('mypass1234')
});

test('Should login existing user', async() => {
  const response = await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200);

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not longin nonexistent user', async() => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: 'thisisnotmypass'
  }).expect(400);
});

test('Should get profile for user', async() => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should not get profile for unauthenticated user', async() => {
  await request(app)
    .get('/users/me')
    .set('Authorization', 'donothavetoken')
    .send()
    .expect(401);
});

test('Should delete account for user', async() => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user', async() => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', 'donothavetoken')
    .send()
    .expect(401);
});

test('Should upload avatar image', async() => {
  await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('upload', 'test/fixtures/profile-pic.jpg')
    .expect(200);

  const user = await User.findById(userOneId)
  expect(user.avatar).toEqual(expect.any(Buffer))
});

test('Should update vaid user fields', async() => {

  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: 'Jessica'
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.name).toEqual('Jessica');
});

test('Should not update invalid user fields', async() => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: 'Maringá'
    })
    .expect(400);
});