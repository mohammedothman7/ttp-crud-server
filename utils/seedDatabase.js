const { Campus, Student } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: 'Brooklyn College',
      address: 'Brooklyn',
      description: 'A college in Brooklyn',
    }),
    Campus.create({
      name: 'College of Staten Island',
      address: 'Staten Island',
      description: 'A college on Staten Island',
    }),
    Campus.create({
      name: 'John Jay College',
      address: 'Manhattan',
      description: 'A college in Manhattan',
    }),
    Student.create({
      firstName: 'Mohammed',
      lastName: 'Othman',
      email: 'example@gmail.com',
      gpa: 3.8,
      campusId: 2,
    }),
    Student.create({
      firstName: 'John',
      lastName: 'Snow',
      email: 'winteriscoming@gmail.com',
      gpa: 1.2,
    }),
  ]);
};

module.exports = seedDatabase;
