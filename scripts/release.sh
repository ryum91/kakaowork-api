#/bin/sh

yarn version-up

yarn build

cp package.json ./dist
cp yarn.lock ./dist
cp README.md ./dist
cp CHANGELOG.md ./dist
cp LICENSE ./dist

echo 'Enter "cd dist && npm publish"'