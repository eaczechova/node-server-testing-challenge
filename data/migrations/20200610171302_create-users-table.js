exports.up = function (knex) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.string('username', 128).notNullable().unique();
		tbl.string('state', 128).notNullable();
		tbl.string('city', 128).notNullable();
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users');
};
