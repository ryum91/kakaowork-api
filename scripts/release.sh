#/bin/sh

yarn version-up

yarn build

cp package.json ./dist

echo 'Enter "cd dist && npm publish"'