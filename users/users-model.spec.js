const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');
const request = require('supertest');
const server = require('../api/server.js');

beforeEach(async () => {
	await db('users').truncate();
});

describe('test resource managment', () => {
	describe('POST /api/users', () => {
		it('should return 201 status when new resources have been successfully created', async () => {
			const response = await request(server)
				.post('/api/users')
				.send({ username: 'ewa', state: 'US', city: 'Chicago' });

			expect(response.status).toBe(201);
		});

		it('should return 500 status when failes to create new resources', async () => {
			const response = await request(server)
				.post('/api/users')
				.send({ state: 'US', city: 'Chicago' });

			expect(response.status).toBe(500);
		});
	});

	describe('DELETE /api/users', () => {
		it('should return resources once successfully deleted', async () => {});
	});
});
