const rateLimit = require('express-rate-limit');
const { HttpCode, Limit } = require('../config/constant');

const limiter = rateLimit({
    windowMs: Limit.WINDOW_MS,
    max: Limit.MAX_LIMITER,
    handler: (req, res, next) => {
        return res.status(HttpCode.TOO_MANY_REQUESTS).json({
            status: 'error',
            code: HttpCode.TOO_MANY_REQUESTS,
            message: 'Too many login attempts',
        });
    },
});

module.exports = limiter;