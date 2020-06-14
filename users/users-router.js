const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get users' });
		});
});

router.post('/', (req, res) => {
	const newUser = req.body;
	Users.insert(newUser)
		.then((user) => {
			res.status(201).json(user);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create a user.' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then((user) => {
			if (user) {
				res.json({ removed: user });
			} else {
				res.status(404).json({ message: 'Could not find user with given id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to delete user' });
		});
});

module.exports = router;
