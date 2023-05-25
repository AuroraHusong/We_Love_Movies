exports.up = function(knex) {
    return knex.schema.createTable("theaters", (table)=>{
      table.increments("theater_id").primary();
      table.varchar('name', 250);
      table.varchar('address_line_1', 250);
      table.varchar('address_line_2', 250);
      table.varchar('city', 250);
      table.varchar('state', 250);
      table.varchar('zip', 250);
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("theaters")
  };
  