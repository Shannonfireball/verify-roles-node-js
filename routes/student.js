const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');

const ROLES_LIST = require('../config/roles_list.js');

const verifyRoles = require('../middleware/verifyRoles');

router.route('/').post(verifyRoles(ROLES_LIST.student_create), studentController.createStudent)
                 .get(verifyRoles(ROLES_LIST.student_get), studentController.getAllStudents);



module.exports = router;