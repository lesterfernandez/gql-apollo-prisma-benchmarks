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
* __Run:__ Tue May 03 2022 16:48:40 GMT-0400 (Eastern Daylight Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                              | Requests/s | Latency | Throughput/Mb |
| :--                          | --:        | :-:     | --:           |
| http+pg                      | 21654.5    | 2.89    | 3.86          |
| http+prisma                  | 10234.4    | 6.83    | 1.82          |
| apollo-server-express+prisma | 9580.7     | 7.42    | 2.41          |
| apollo-server+prisma         | 9306.5     | 7.70    | 2.34          |
| express+pg                   | 8605.8     | 8.11    | 1.88          |
| express-graphql+prisma       | 7765.3     | 9.12    | 2.03          |
| express+prisma               | 5625.2     | 12.81   | 1.23          |
| apollo-server-koa+prisma     | N/A | N/A | N/A |
| koa+prisma                   | N/A | N/A | N/A |
| koa+pg                       | N/A | N/A | N/A |

Koa kept dropping the database connections, so the results were innaccurate.
I'm not sure if I did something wrong or if koa just sucks