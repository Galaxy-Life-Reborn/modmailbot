
exports.up = async function (knex) {
  await knex.schema.table("threads", table => {
    table.boolean("contact_team").notNullable().defaultTo(false);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("threads", table => {
    table.dropColumn("contact_team");
  });
};
