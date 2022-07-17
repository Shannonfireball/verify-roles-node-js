const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

const ROLES_LIST = require('../config/roles_list.js');

const verifyRoles = require('../middleware/verifyRoles');


router.route('/').post( roleController.CreateRole)
                  .get(verifyRoles(ROLES_LIST.role_get), roleController.getAllRoles);




module.exports = router;