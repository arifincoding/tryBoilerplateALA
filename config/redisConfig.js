const redis = require("redis");
require('dotenv').config

const url = process.env.REDIS_URL
const password = process.env.REDIS_PASSWORD 

const redisDb = redis.createClient({
    url
});
// const redisDb = redis.createClient();

module.exports = redisDb  