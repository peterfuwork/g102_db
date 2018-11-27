
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { 
          name: 'Peter',
          fave_animal: 'https://dl.dropboxusercontent.com/s/0n3ge0wjxld8wze/raccoon-butterfly.jpg',
          previous_occupation: 'front-end developer',
          hometown_lat: 25.073754,
          hometown_long: 121.590904,
          useless_superpower: 'sleeping'
        }
      ]);
    });
};
