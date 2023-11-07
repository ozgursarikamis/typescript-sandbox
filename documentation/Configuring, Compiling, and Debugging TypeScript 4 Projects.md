# Configuring, Compiling, and Debugging TypeScript 4 Projects

- Typescript is an npm package
- Typescript can be located in any folder and one workstation can have multiple versions.
- Different versions can be installed locally, plus one global version.

> Local Version: Found within a project's directory, only used by that project.

> Global Version: **Fallback** for when there is not a local version!

> Embedded Version: Fixed version built into some software (i.e., VSCode, Webstorm)

## What is `TypeScript` Compiler

- Turns TypeScript into browser-compatible language
- Browsers understand Javascript, but not TypeScript
- Results may be different based on compiler version.
- Can be executed automatically by watching for changes in files.

## `tsconfig.json`

- Configuration file for TypeScript compiler
- Can be generated automatically by running `tsc --init`
- Can be used to specify which files to compile, where to output, and which version of JavaScript to output.

## Multi-file Compilation vs. Single-file Compilation

| Multi-file Compilation | Single-file Compilation |
| ---------------------- | ----------------------- |
| Creates one `JS` file for every target `TypeScript` file | Combines all `TypeScript` files into one single `Javascript` file. |
| Each file must be loaded for the application to work in browser | Only single file must be loaded for the application to work in a browser |
| Files must be concatenated or use require to work in `Node.js` | Single file will work when invoked as a `Node` script |
| Possible to update just one generated file in production | Updated production code must be pushed in its entirety. |
| Standard compilation option for TypeScript | Additional tooling (`Webpack`, `Babel`) needed. |

> Single-file Compilation is chosen by the majority of developers. It generally makes it easier to deploy as both a web application and a `Node.js` application.

<u>**Benefits of Single-file Compilation:**</u>

- Greater support for isomorphic applications (`Isomorphic applications` are applications that can run in both the browser and `Node.js`)
- Fewer HTTP requests, simpler deployment to web applications
- Greater consistency across `Node.js` and browser applications
