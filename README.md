# What is this
These are benchmarks results which are focused around measuring the relative performance of different GraphQL servers when using (or not using) Prisma (an ORM) and GraphQL Nexus.

(inspired by: fastify & ben awad)

# TL;DR
GraphQL Nexus doesn't affect performance 🤩
fastify is fast 💨
prisma slightly hurts performance

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
* __Run:__ Thu May 05 2022 17:12:35 GMT-0400 (Eastern Daylight Time)
* __Ran with the following options:__ connections: 25, pipelines: 1, duration: 10s

|                                    | Requests/s | Latency | Throughput/Mb |
| :--                                | --:        | :-:     | --:           |
| fastify+pg                         | 4240.1     | 5.40    | 0.76          |
| http+pg                            | 4234.8     | 5.41    | 0.76          |
| fastify+prisma                     | 3958.5     | 5.82    | 0.71          |
| http+prisma                        | 3955.4     | 5.82    | 0.71          |
| express+pg                         | 3935.0     | 5.85    | 0.95          |
| express+prisma                     | 3919.2     | 5.88    | 0.94          |
| apollo-server+pg                   | 3856.6     | 5.99    | 0.99          |
| apollo-server-fastify+prisma+nexus | 3828.3     | 6.03    | 0.83          |
| apollo-server-express+pg           | 3781.7     | 6.11    | 1.05          |
| apollo-server-fastify+prisma       | 3739.7     | 6.19    | 0.81          |
| apollo-server+prisma+nexus         | 3724.6     | 6.21    | 0.96          |
| express-graphql+prisma             | 3696.6     | 6.26    | 0.92          |
| apollo-server-express+prisma       | 3675.0     | 6.31    | 1.03          |
| apollo-server-express+prisma+nexus | 3638.6     | 6.37    | 1.02          |
| apollo-server+prisma               | 3615.4     | 6.42    | 0.93          |
