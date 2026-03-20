const Redis = require('ioredis');

const redis = new Redis({
    username: 'default',
    password: 'gseXqABqG8YXo8Uw6EV2zi6f4deFbdef',
    host: 'redis-14548.crce281.ap-south-1-3.ec2.cloud.redislabs.com',
    port: 14548,
    maxRetriesPerRequest: null
});

module.exports = redis;


