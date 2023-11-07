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