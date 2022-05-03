# TL;DR

# Usage

**Before anything, make sure docker-compose is installed**

Then run the following commands: (replace "yarn" with "npm run" where applicable)
- ```yarn``` or ```npm i```: install dependencies

## Start up database
- ```yarn initDB```: only run this command when doing the benchmarks for the first time
- ```yarn startDB```: run this command every other time

## Run benchmarks
1. make sure you ran ```yarn startDB``` or ```yarn initDB``` already
1. ```yarn start bench```: run the benchmarks
1. ```yarn compare -t```: print the results to your terminal

# Additional Commands

- ```yarn run start -h```: how to run benchmarks 
- ```yarn run compare -h```: how to compare results

# Benchmarks

* __Machine:__ linux x64 | 16 vCPUs | 47.0GB Mem
* __Node:__ `v16.15.0`
* __Run:__ Tue May 03 2022 17:07:32 GMT-0400 (Eastern Daylight Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

Koa kept dropping the database connections, so the results were inaccurate. I'm not sure if I did something wrong or if koa just sucks

|                              | Requests/s | Latency | Throughput/Mb |
| :--                          | --:        | :-:     | --:           |
| http+pg                      | 21556.8    | 0.81    | 3.84          |
| http+prisma                  | 13804.0    | 1.72    | 2.46          |
| apollo-server+prisma         | 8264.4     | 3.17    | 2.08          |
| apollo-server-express+prisma | 8160.8     | 3.16    | 2.23          |
| express+pg                   | 8127.2     | 3.21    | 1.95          |
| express-graphql+prisma       | 6668.4     | 3.93    | 1.89          |
| express+prisma               | 6666.0     | 3.96    | 1.60          |
| apollo-server-koa+prisma     | N/A | N/A | N/A |
| koa+prisma                   | N/A | N/A | N/A |
| koa+pg                       | N/A | N/A | N/A |
