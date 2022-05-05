# What is this
These are benchmarks results which are focused around measuring the relative performance of different GraphQL servers when using (or not using) Prisma (an ORM) and GraphQL Nexus.

# TL;DR
GraphQL Nexus doesn't hurt performance 🤩
fastify is fast 💨
prisma hurts performance, but not too much

http seems to perform poorly, i'm not sure if my implementation is off because that is very unexpected

# Usage

**Before anything, make sure docker-compose is installed**

Then run the following commands: (replace "yarn" with "npm run" where applicable)
- ```yarn``` or ```npm i```: install dependencies

## Start up database
- ```yarn initDB```: only run this command when doing the benchmarks for the first time
- ```yarn startDB```: run this command every other time

## Run benchmarks
1. make sure you ran ```yarn startDB``` or ```yarn initDB``` already
1. ```yarn start```: run the benchmarks
1. ```yarn compare -t```: print the results to your terminal

# Additional Commands

- ```yarn run start -h```: how to run benchmarks 
- ```yarn run compare -h```: how to compare results

# Benchmarks

* __Machine:__ darwin arm64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.13.0`
* __Run:__ Wed May 04 2022 22:42:07 GMT-0400 (Eastern Daylight Time)
* __Ran with the following options:__ connections: 10, pipelines: 1, duration: 5s

|                                    | Requests/s | Latency | Throughput/Mb |
| :--                                | --:        | :-:     | --:           |
| fastify+pg                         | 70240.0    | 0.01    | 16.68         |
| fastify+prisma                     | 67843.2    | 0.01    | 16.11         |
| apollo-server-fastify+prisma+nexus | 36528.0    | 0.01    | 8.26          |
| apollo-server-fastify+prisma       | 35920.0    | 0.01    | 8.12          |
| express+pg                         | 21902.4    | 0.04    | 8.58          |
| express+prisma                     | 21816.0    | 0.04    | 8.55          |
| apollo-server+prisma               | 16804.0    | 0.09    | 4.23          |
| apollo-server+prisma+nexus         | 16728.8    | 0.09    | 4.21          |
| apollo-server-express+prisma       | 16290.4    | 0.10    | 4.46          |
| apollo-server-express+prisma+nexus | 16274.4    | 0.10    | 4.45          |
| express-graphql+prisma             | 14255.2    | 0.15    | 4.04          |
| http+pg                            | 6814.8     | 1.03    | 1.22          |
| http+prisma                        | 5326.8     | 1.36    | 0.95          |
