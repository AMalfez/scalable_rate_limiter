const bullmq = require('bullmq');
const redis = require('../config/redis');
const Queue = bullmq.Queue;

const orderQueue = new Queue('order_queue', {connection:redis});

module.exports = orderQueue;