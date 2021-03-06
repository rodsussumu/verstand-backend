
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        
        table.string('email')

        table.string('password')

        table.string('capaPath')

        table.timestamp('createdAt').defaultTo(knex.fn.now())

        table.timestamp('updatedAt').nullable()

        table.timestamp('deletedAt').nullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
