# Webpack 5 issue
This repo shows a webpack 5 issue where a repo upgraded from webpack 4 when running a watch on a source file will initally emit the bundle, on changing the source a second update will be emited but any further changes will not be updated.

* node v15.2.0
* npm 7.0.10

## Steps to reproduce
1. Clone repo
2. run `npm install`
3. run `npm run webpack:watch`
4. open bundle.js and see the first log statement.
5. change simple.ts and uncomment line 3
6. output detects change, see the change appear in bundle.js
7. change simple.ts and uncomment line 5

### Expected
8. output detects change, see the change appear in bundle.js
9. all future changes update bundle.js.

### Actual
8. output detects change, bundle.js has not updated.
9. all future changes do not update bundle.js