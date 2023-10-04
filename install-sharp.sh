#!/usr/bin/env bash

if [ ! -d "node_modules" ]; then 
  echo "Please run pnpm install first";
  exit 1;
fi 

cd node_modules/sharp && pnpm install --production && pnpm run install || exit 1;
cd -;
