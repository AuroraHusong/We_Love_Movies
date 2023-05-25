exports.up = function(knex) {
    return knex.schema.createTable('critics', (table)=>{
      table.increments('critic_id').primary();
      table.varchar('preferred_name', 250);
      table.varchar('surname', 250);
      table.varchar('organization_name', 250);
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('critics')
  };
  