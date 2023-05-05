const Repair = require('../models/reapir.model');

exports.allRepair = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  res.status(200).json({
    message: 'The query has been done success.',
    results: repairs.length,
    repairs,
  });
};

exports.findOne= async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Repair find success.',
    repair,
  });
};

exports.repair = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found.',
    });
  }

  await repair.update({
    status: 'completed',
  });

  res.json({
    message: 'Repair has been update',
  });
};

exports.create = async (req, res) => {
  const { date, userId } = req.body;

  const repair = await Repair.create({
    date,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'Repair has been created!',
    repair,
  });
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found',
    });
  }

  await repair.update({
    status: 'cancelled',
  });

  res.json({
    message: 'Repair has been deleted',
  });
};

exports.update = catchAsync(
    async (req, res) => {
      const { repair } = req;
  
      await repair.update({
        status: 'completed',
      });
  
      res.status(200).json({
        message: 'Repair has been update',
      });
    }
  );