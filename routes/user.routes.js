const userController =  require('../controllers/user.controller');
const express = require('express');
const existUserValid = require('../middlewares/user.middleware');
const fieldUserValid = require('../middlewares/userValidation.middleware');
const router = express.Router();

router
    .route('/')
    .get(userController.findAll)
    .post(fieldUserValid.createUserValidation, userController.create);

router
    .route('/:id')
    .get(existUserValid.validExistUser, userController.findOne) 
    .patch(fieldUserValid.updateUser, existUserValid.validExistUser,userController.update)
    .delete(existUserValid.validExistUser, userController.delete)

module.exports = router;