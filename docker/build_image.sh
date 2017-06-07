#!/usr/bin/env bash

CURRENT_TAG=$(git describe --always --tag)

docker build -t asbubam/hello-node:$CURRENT_TAG .
docker tag asbubam/hello-node:$CURRENT_TAG asbubam/hello-node:latest

if [ $1 ] && [ $1 = 'push' ]; then
    docker push asbubam/hello-node:$CURRENT_TAG
    docker push asbubam/hello-node:latest
fi

docker images | grep -F "asbubam/hello-node" | grep -F "$CURRENT_TAG"
