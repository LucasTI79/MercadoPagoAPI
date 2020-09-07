
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tbCategories').del()
    .then(function () {
      // Inserts seed entries
      return knex('tbCategories').insert([
        {categoryName: 'corpo'},
      ]);
    });
};
