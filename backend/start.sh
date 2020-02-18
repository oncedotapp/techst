#!/bin/bash

PRISMA_SERVER=${PRISMA_SERVER:?"PRISMA_SERVER is required to make this image work"}

curl -sf ${PRISMA_SERVER}/status > /dev/null

while [ $? != 0 ]; do
  echo "Prisma server not up yet, sleeping a couple of seconds..."
  sleep 2
  curl -sf ${PRISMA_SERVER}/status > /dev/null
done

prisma deploy
npm run dev
