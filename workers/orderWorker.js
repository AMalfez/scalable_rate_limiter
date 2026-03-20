const redis = require('../config/redis');
const bullmq = require('bullmq');
const Worker = bullmq.Worker;

const worker = new Worker('order_queue', async job => {
    console.log(`Processing order ${job.id} with data:`, job.data);

    //simulate order processing time of 3sec
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log(`Order ${job.id} processed successfully!`);

}, {connection:redis})

worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed!`);
});

worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error:`, err);
});