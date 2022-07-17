const express = require('express');
const router = express.Router();
const userController = require('../controllers/getUser');


const ROLES_LIST = require('../config/roles_list.js');

const verifyRoles = require('../middleware/verifyRoles');

router.route('/').get(verifyRoles(ROLES_LIST.user_get), userController.getUser);

router.route('/:id').get(verifyRoles(ROLES_LIST.user_get), userController.getSingle);



module.exports = router;