# What is this
These are benchmarks results which are focused around measuring the relative performance of different GraphQL servers when using (or not using) Prisma (an ORM) and GraphQL Nexus.

(inspired by: fastify & ben awad)

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

* __Machine:__ linux x64 | 16 vCPUs | 47.0GB Mem
* __Node:__ `v16.15.0`
* __Run:__ Thu May 05 2022 15:10:23 GMT-0400 (Eastern Daylight Time)
* __Ran with the following options:__ connections: 15, pipelines: 3, duration: 10s

|                                    | Requests/s | Latency | Throughput/Mb |
| :--                                | --:        | :-:     | --:           |
| fastify+pg                         | 38992.0    | 0.01    | 9.26          |
| fastify+prisma                     | 36952.0    | 0.01    | 8.78          |
| apollo-server-koa+prisma           | 33704.0    | 0.51    | 5.75          |
| apollo-server-fastify+prisma+nexus | 19748.0    | 0.01    | 4.46          |
| apollo-server-fastify+prisma       | 19724.0    | 0.01    | 4.46          |
| koa+pg                             | 18491.2    | 1.18    | 3.30          |
| express+pg                         | 13054.0    | 0.02    | 5.12          |
| express+prisma                     | 12310.0    | 0.02    | 4.82          |
| koa+prisma                         | 11888.8    | 1.98    | 2.31          |
| http+prisma                        | 11756.0    | 0.01    | 2.10          |
| apollo-server+pg                   | 7826.0     | 0.06    | 1.97          |
| apollo-server+prisma               | 7802.5     | 0.06    | 1.96          |
| apollo-server-express+prisma+nexus | 7680.0     | 0.06    | 2.10          |
| apollo-server+prisma+nexus         | 7649.0     | 0.07    | 1.93          |
| apollo-server-express+prisma       | 7441.0     | 0.07    | 2.04          |
| apollo-server-express+pg           | 7431.0     | 0.07    | 2.03          |
| express-graphql+prisma             | 6650.0     | 0.25    | 1.88          |
| http+pg                            | N/A        | N/A     | N/A           |
