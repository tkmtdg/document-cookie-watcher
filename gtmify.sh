#!/bin/bash
names=(
  "dcw"
  "itptd"
)
for name in "${names[@]}" ; do
  cat "./dist/"${name}".js" \
  | fold -w120 \
  | sed 's/\\/\\\\/g' \
  | sed "s/'/\\\'/g" \
  | sed "s/^/'/" \
  | sed "s/$/'+/" \
  | cat \
  | sed '1s/^/eval(/' \
  | sed '$s/.$/);/' \
  > "./dist/"${name}".gtm.js"
done
