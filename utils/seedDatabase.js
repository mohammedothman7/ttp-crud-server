const { Campus, Student } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: 'Brooklyn College',
      address: 'Brooklyn',
      description: 'A college in Brooklyn',
<<<<<<< HEAD
=======
      imageUrl:
        'https://petersonsbackup.blob.core.windows.net/static/cdn/profiles/10000623/e042198d-406b-4f83-b5a3-5d0adb2fd2c5',
>>>>>>> new
    }),
    Campus.create({
      name: 'College of Staten Island',
      address: 'Staten Island',
      description: 'A college on Staten Island',
<<<<<<< HEAD
=======
      imageUrl:
        'https://zenprospect-production.s3.amazonaws.com/uploads/logos/559234c473696418f681cb00/logo',
>>>>>>> new
    }),
    Campus.create({
      name: 'John Jay College',
      address: 'Manhattan',
      description: 'A college in Manhattan',
<<<<<<< HEAD
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
=======
      imageUrl:
        'https://www.jjay.cuny.edu//sites/default/files/marketing_development/jj_logo_color.png',
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
>>>>>>> new
    }),
  ]);
};

module.exports = seedDatabase;
