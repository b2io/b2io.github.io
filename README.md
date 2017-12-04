# base2.io

> The Base Two website.

## Setup

Install [Node.js v8.x](https://nodejs.org).

**Windows**

Ensure you have the tools needed by `node-gyp` on your path; if you don't, try:

```
npm i -g --production windows-build-tools
```

Installation:

```
$ npm i
$ npm run build
```

Local development server on port 8000:

```
$ npm run develop
```

Local production server on port 9000:

```
$ npm start
```

## Deployment:

> [TODO: Update deployment steps in README](https://github.com/b2io/base2.io/issues/123)

## Known Issues

If you're getting unexpected errors with GraphQL data or plugins, try:

```
$ rm .cache
$ rm public
$ npm run build
```
