const redis = require('redis');
const { createClient } = redis;

const client = createClient({
    username: 'default',
    password: 'gseXqABqG8YXo8Uw6EV2zi6f4deFbdef',
    socket: {
        host: 'redis-14548.crce281.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 14548
    }
});

client.on('error', err => console.log('Redis Client Error', err));

(async () => {
    await client.connect();
    console.log("Redis connected");
})();

module.exports = client;


