#!/bin/sh
# I used this command when adding a new benchmark to make sure it works
# I might add proper testing later when I have time, i'm also accepting PRs

curl -d "{ \"query\": \"{ hello }\" }" -H "Content-Type: application/json" http://localhost:3000