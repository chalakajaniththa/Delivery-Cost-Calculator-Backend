const { check, validationResult } = require('express-validator');

exports.validateZone = [
    check('zoneName').not().isEmpty().withMessage('Zone name is required'),
    check('postalCode').not().isEmpty().withMessage('Postal code is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
