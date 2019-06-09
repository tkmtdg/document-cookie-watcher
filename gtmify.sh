#!/bin/bash
cat ./dist/dcw.js \
| fold -w120 \
| sed "s/'/\\\'/g" \
| sed "s/^/'/" \
| sed "s/$/'+/" \
| cat \
| sed '1s/^/eval(/' \
| sed '$s/.$/);/' \
> ./dist/dcw.gtm.js
