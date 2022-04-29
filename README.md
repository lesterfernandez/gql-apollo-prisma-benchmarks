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
* __Run:__ Fri Apr 29 2022 14:20:29 GMT-0400 (Eastern Daylight Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|         | Requests/s | Latency | Throughput/Mb |
| :--     | --:        | :-:     | --:           |
| bare    | 49992.0    | 0.01    | 8.92          |
| fastify | 47360.0    | 0.01    | 8.45          |
| koa     | 43312.0    | 0.01    | 7.73          |
| express | 13324.0    | 0.03    | 2.38          |
