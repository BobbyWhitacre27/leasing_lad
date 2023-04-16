const client = require('./client');
const bcrypt = require('bcrypt');

async function createUser({ username, password }) {
  const SALT_COUNT = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *
        `,
      [username, hashedPassword]
    );
    delete user.password;
    return user;
  } catch (error) {
    console.error('error creating users in users.js', error);
  }
}

async function getUserbyUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * 
      FROM users
      WHERE username = $1
      `,
      [username]
    );
    return user;
  } catch (error) {
    console.error('error in getUserbyUsername');
  }
}

async function getUser({ username, password }) {
  const user = await getUserbyUsername(username);
  const hashedPassword = user.password;
  const isValid = await bcrypt.compare(password, hashedPassword);

  try {
    if (isValid) {
      const {
        rows: [user],
      } = await client.query(
        `
      SELECT *
      FROM users
      WHERE username = $1
      `,
        [username]
      );

      return user;
    }
  } catch (error) {
    console.error('err  in getUser in db/users.js', error);
  }
}

async function getUserbyId(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE id = $1
      `,
      [userId]
    );

    delete user.password;

    return user;
  } catch (error) {
    console.error('err in getUserById in db/users.js', error);
  }
}

async function getAllUsers() {
  const { rows: users } = await client.query(`
    SELECT * FROM users;
    `);

  return users;
}

module.exports = {
  createUser,
  getUserbyUsername,
  getUser,
  getUserbyId,
  getAllUsers
};