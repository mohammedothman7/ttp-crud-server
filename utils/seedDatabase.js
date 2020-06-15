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
      firstName: 'Daniel',
      lastName: 'Smith',
      email: 'DSmith@example.com',
      gpa: 3.9,
    }),
    Student.create({
      firstName: 'Jon',
      lastName: 'Snow',
      email: '4thewatch@example.com',
      gpa: 2.0,
      campusId: 1,
    }),
  ]);
};

module.exports = seedDatabase;
