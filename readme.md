for pulling redis stack image


docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

docker exec -it 2f3b3ec82d3 bash

redis-cli

ping

open interface for redis stack in browser localhost

http://localhost:8001/

set nodejs project , install ioredis , import and makefile

run=> node <file_name>