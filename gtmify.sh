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
  if [ "${name}" = "dcw" ]; then
    echo "global.DocumentCookieWatcher = DocumentCookieWatcher;" >> "./dist/"${name}".gtm.js"
  else
    echo "global.ITPTargetDetector = ITPTargetDetector;" >> "./dist/"${name}".gtm.js"
  fi
done
