
exports.up = function(knex) {
    return knex.schema.createTable('movies', (table)=>{
      table.increments('movie_id').primary();
      table.varchar('title', 250);
      table.integer('runtime_in_minutes');
      table.varchar('rating', 250)
      table.text('description');
      table.varchar('image_url', 250)
      table.timestamps(true, true)
  })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('movies')
  };