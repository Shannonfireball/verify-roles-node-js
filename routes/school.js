const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

const ROLES_LIST = require('../config/roles_list.js');

const verifyRoles = require('../middleware/verifyRoles');


router.route('/').post(verifyRoles(ROLES_LIST.school_create), schoolController.CreateSchool)
                  .get(verifyRoles(ROLES_LIST.school_get),schoolController.getAllSchools);




module.exports = router;