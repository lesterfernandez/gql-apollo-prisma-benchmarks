# TL;DR

# Usage

**Before anything, make sure docker-compose is installed**

Then run the following commands: (replace "yarn" with "npm run" where applicable)
- ```yarn``` or ```npm i```: install dependencies
- ```yarn startDB```: initialize local database
- ```yarn build```: build typescript
- ```yarn startDB```: ready the database
- ```yarn start bench```: run the benchmarks
- ```yarn compare -t```: print the table

# Additional Commands

- ```yarn run start -h```: how to run benchmarks 
- ```yarn run compare -h```: how to compare results

# Benchmarks

* __Machine:__ linux x64 | 16 vCPUs | 47.0GB Mem
* __Node:__ `v16.15.0`
* __Run:__ Mon May 02 2022 18:11:05 GMT-0400 (Eastern Daylight Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                              | Requests/s | Latency | Throughput/Mb |
| :--                          | --:        | :-:     | --:           |
| http+pg                      | 23010.7    | 0.01    | 4.10          |
| koa+pg                       | 18237.3    | 0.02    | 3.25          |
| http+prisma                  | 8926.0     | 0.25    | 1.59          |
| apollo-server+prisma         | 8376.7     | 0.16    | 2.11          |
| apollo-server-express+prisma | 8140.7     | 0.20    | 2.23          |
| express+pg                   | 8047.3     | 0.35    | 1.93          |
| koa+prisma                   | 7272.7     | 0.52    | 1.41          |
| express+prisma               | 4755.3     | 1.11    | 1.14          |
