const redis = require('../config/redis');

const TIME_LIMIT = 60;
const RATE_LIMIT = 100;

const redisLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        const key = `rate_limit:${ip}`;
        const current_req_count = await redis.incr(key);
        if(current_req_count === 1) await redis.expire(key, TIME_LIMIT);
        
        if(current_req_count > RATE_LIMIT) {
            return res.status(429).json({ error: 'Too Many Requests' });
        }
        next();
    } catch (error) {
        console.error('Error in rate limiter middleware:', error);
        next(error);
    }
}

module.exports = redisLimiter;