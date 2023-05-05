const express = require('express');

const repairController = require('../controllers/repair.controller');
const existRepairValid = require('../middlewares/repair.middleware');
const fieldRepairValid = require('../middlewares/repairValid.middleware');

const routerRepair = express.Router();

routerRepair
  .route('/')
  .get(repairController.allRepair)
  .post(fieldRepairValid.createRepairValid, repairController.create);

routerRepair
  .route('/:id')
  .get(existRepairValid.validExistRepair, repairController.findOne)
  .patch(existRepairValid.validExistRepair, repairController.update)
  .delete(existRepairValid.validExistRepair,repairController.delete);

module.exports = routerRepair;