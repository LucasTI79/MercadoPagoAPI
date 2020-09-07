exports.up = function(knex) {
    return knex.schema.createTable('tbCategories', function(table){
      table.increments('idCategory');
      table.string('categoryName').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tbCategories');
  };
