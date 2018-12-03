
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
        },
        {
          name: 'Ben',
          fave_animal: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-running.adapt.945.1.jpg',
          previous_occupation: 'Sales Associate',
          hometown_lat: 39.7392,
          hometown_long: 104.9903,
          useless_superpower:'night vision in day time'
        }
      ]);
    });
};
