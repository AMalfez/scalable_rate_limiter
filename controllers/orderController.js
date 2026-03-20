const orderQueue = require('../queues/orderQueues');

const createOrder = async(req,res) => {
    try {
        const { userId, productId } = req.body;
        if(!userId || !productId) {
            return res.status(400).json({ error: 'userId and productId are required' });
        }
        await orderQueue.add('create_order', { userId, productId });
        res.status(200).json({ message: 'Order is being processed' });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
}

module.exports = createOrder;