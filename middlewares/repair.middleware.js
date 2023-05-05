
const Repair = require('../models/repair.model');

exports.validExistRepair = async (req,  res,  next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    id,
    status: 'pending',
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found',
    });
  }
  req.repair = repair;
  next();
};