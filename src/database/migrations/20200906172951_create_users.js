exports.up = function(knex) {
    return knex.schema.createTable('tbUsers', function(table){
      table.increments('idUser');
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('CPF').unique().notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tbUsers');
  };
