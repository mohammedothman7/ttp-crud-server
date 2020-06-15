var express = require('express');
var router = express.Router();

// Subrouters;
<<<<<<< HEAD
const campusesRouter = require('./campuses/campuses');
const studentsRouter = require('./students/students');
=======
const campusesRouter = require('./campuses');
const studentsRouter = require('./students');
>>>>>>> new

// Mount our subrouters to assemble our apiRouter;

router.use('/campuses', campusesRouter);
router.use('/students', studentsRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error('Not Found, Please Check URL!');
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
