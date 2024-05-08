import redis from 'redis';

// we should creates a new client and this is how :
const client = redis.createClient(); 
// redis.createClient() by defaulr will use 127.0.0.1 and port 6379

// whenever client.on(çonnect') see whether we successfully connected to the redis-server by listening 
client.on('connect', () => console.log('Redis client connected to the server'));

// we should be able to listen for the error event if we failed to connect to the redis-server
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err.message}`));
