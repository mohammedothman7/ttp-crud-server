var express = require('express');
var router = express.Router();
const { Student } = require('../database/models');

/* GET all students. */
// /api/students
router.get('/', async (req, res, next) => {
  // try to get students object from database
  try {
    // students will be the result of the Campus.findAll promise
    const students = await Student.findAll();
    // if students is valid, it will be sent as a json response
    console.log(students);
    res.status(200).json(students);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

// Route to getting one student
router.get('/:id', async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a student with matching id
  try {
    // if successful:
    const student = await Student.findByPk(id);
    // send back the student as a response
    res.status(200).json(student);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

// Route to handle adding a student
// /api/students/
router.post('/', async (req, res, next) => {
  // Take the form data from the request body
  const { firstName, lastName, email, gpa, imageUrl } = req.body;
  // Create a student object
  const studentObj = {
    firstName,
    lastName,
    email,
    gpa,
    imageUrl,
  };
  try {
    // Create a new student on the database
    const newStudent = await Student.create(studentObj);
    // The database would return a student
    // send that student as a json to the client
    res.status(201).send(newStudent);
  } catch (err) {
    next(err);
  }
});

// Route to handle removing a student
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  // get an id for a student to delete
  try {
    // pass the id to the database to find student to be deleted
    // database would either respond succcess or fail
    const student = await Student.findByPk(id);
    // invoke the .destroy() method on the returned student
    await student.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Route to edit a student
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, gpa, imageUrl, campusId } = req.body;
  const updatedObj = { firstName, lastName, email, gpa, imageUrl, campusId };
  console.log(updatedObj);

  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.put('/enrollStudent/:id', async (req, res, next) => {
  const { id } = req.params;
  const campusId = req.body.id;
  const updatedObj = { campusId };
  console.log(updatedObj);

  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
