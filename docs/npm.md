## About NPM scripts
- npm start
run the compiler and a server at the same time, both in "watch mode"

- npm run tsc
run the TypeScript compiler once

- npm run tsc:w
run the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.

- npm run lite
run the lite-server, a light-weight, static file server, written and maintained by John Papa with excellent support for Angular apps that use routing.

- npm run typings
runs the typings tool

- npm postinstall
called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files this app requires.
