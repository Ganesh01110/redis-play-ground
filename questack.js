const client = require('./client')

async function init(){
    await client.lpush("messages", "hii");
    await client.lpush("messages", "from");
    await client.lpush("messages", "node");
    await client.lpush("messages", "with_redis");

}

init();