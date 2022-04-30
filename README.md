# TL;DR

# Usage

**Before anything, make sure docker-compose is installed**
- ```yarn run startDB```: ready the database
- ```yarn run start -h```: how to run benchmarks 
- ```yarn run compare -h```: how to compare results

# Benchmarks

* __Machine:__ linux x64 | 16 vCPUs | 47.0GB Mem
* __Node:__ `v16.15.0`
* __Run:__ Sat Apr 30 2022 10:37:29 GMT-0400 (Eastern Daylight Time)

|                | Requests/s | Latency | Throughput/Mb |
| :--            | --:        | :-:     | --:           |
| http+pg        | 22168.0    | 0.01    | 3.95          |
| koa+pg         | 19864.0    | 0.02    | 3.54          |
| http+prisma    | 8550.0     | 0.58    | 1.52          |
| express+pg     | 7874.7     | 0.91    | 1.89          |
| koa+prisma     | 7550.0     | 1.02    | 1.47          |
| express+prisma | 5068.7     | 1.28    | 1.22          |
