
exports.up = async function(knex) {
  if (! await knex.schema.hasTable("moderator_stats")) {
    await knex.schema.createTable("moderator_stats", table => {
      table.string("user_id", 20).primary().notNullable();
      table.string("user_name", 128).notNullable();
      table.integer("reply_count").unsigned().defaultTo(0).notNullable();
      table.integer("reply_char_count").unsigned().defaultTo(0).notNullable();
      table.integer("reply_edit_count").unsigned().defaultTo(0).notNullable();
      table.integer("reply_delete_count").unsigned().defaultTo(0).notNullable();
      table.integer("snippets_used_count").unsigned().defaultTo(0).notNullable();
      table.dateTime("first_action").notNullable();
    });
  }
};

exports.down = async function(knex) {
  if (await knex.schema.hasTable("moderator_stats")) {
    await knex.schema.dropTable("moderator_stats");
  }
};
