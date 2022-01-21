const connection = require('./connection');

const getAll = async () => {
  const [characters] = await connection.execute('SELECT * FROM characters');

  return characters;
}

// const getById = async (id) => {
//   const [characters] = await connection.execute('SELECT * FROM characters WHERE id=?', [id]);

//   return characters[0];
// }

const getById = async (id) => {
  const [[character]] = await connection.execute('SELECT * FROM characters WHERE id=?', [id]);

  return character;
}

const create = async (name, cartoon) => {
  const [result] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)', [name, cartoon]);

  return { id: result.insertId, name, cartoon };
}

module.exports = {
  getAll,
  create,
  getById
};