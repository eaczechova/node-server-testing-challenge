const db = require('../data/dbConfig.js');

module.exports = {
	insert,
	find,
	remove,
	findById,
};

function find() {
	return db('posts');
}

function insert(user) {
	return db('users')
		.insert(user, 'id')
		.then((ids) => ({ id: ids[0] }));
}

function findById(id) {
	return db('posts').where({ id: Number(id) });
}

function remove(id) {
	return db('posts').where('id', Number(id)).del();
}
