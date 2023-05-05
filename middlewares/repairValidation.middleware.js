const {
    body,
    validationResult,
  } = require('express-validator');
  
  const validateFields = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        errors: errors.mapped(),
      });
    }
  
    next();
  };
  
  exports.createRepairValidation = [
    body('date')
      .notEmpty()
      .withMessage('Date cannot be empty')
      .isISO8601('yyyy-mm-dd')
      .withMessage(
        'Incorrect format. uses yyyy-mm-dd'
      ),
    body('motorsNumber')
      .notEmpty()
      .withMessage('Motor number cannot be empty')
      .isNumeric()
      .withMessage(
        'The engine number must be numeric type'
      )
      .isLength({ max: 10 })
      .withMessage(
        'Engine number maximum 10 characters'
      ),
    body('description')
      .notEmpty()
      .withMessage('Description cannot be empty'),
    validateFields,
  ];