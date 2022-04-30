# TL;DR

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

- `-h`: Help on how to use the tool.
- `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`

# Benchmarks

* __Machine:__ linux x64 | 16 vCPUs | 47.0GB Mem
* __Node:__ `v16.15.0`
* __Run:__ Sat Apr 30 2022 10:37:29 GMT-0400 (Eastern Daylight Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                | Requests/s | Latency | Throughput/Mb |
| :--            | --:        | :-:     | --:           |
| http+pg        | 22168.0    | 0.01    | 3.95          |
| koa+pg         | 19864.0    | 0.02    | 3.54          |
| http+prisma    | 8550.0     | 0.58    | 1.52          |
| express+pg     | 7874.7     | 0.91    | 1.89          |
| koa+prisma     | 7550.0     | 1.02    | 1.47          |
| express+prisma | 5068.7     | 1.28    | 1.22          |
