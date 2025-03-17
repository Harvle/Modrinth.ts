# Modrinth.ts

An unofficial REST API wrapper, complete with an optional structure-based wrapper for easy interaction with the Modrinth API.

### Features:
- 100% API coverage
- Full typings supported
- Structure-based
- Support for requests only (no structures, just the parsed responses directly from the API).

> **Note:** Currently supporting Version `2` as a base, however some Version `3` routes are also being accessed (adding support for collections).

# Quick Installation Guide
```
npm install modrinth.ts
```

## REST-Only

### Typescript / Import
```ts
import { RESTModrinth } from "modrinth.ts";

let modrinth = new RESTModrinth();
let result = await modrinth.routes.projects.get("fabric-api").execute();
console.log(result.name); // Fabric API
```

### Node.js / Require
```js
const { RESTModrinth } = require("modrinth.ts");

let modrinth = new RESTModrinth();
let result = await modrinth.routes.projects.get("fabric-api").execute();
console.log(result.name); // Fabric API
```

## Structured

### Typescript / Import
```ts
import { Modrinth } from "modrinth.ts";

let modrinth = new Modrinth();
let result = await modrinth.projects.get("fabric-api").execute();
console.log(result.name); // Fabric API
```

### Node.js / Require
```js
const { Modrinth } = require("modrinth.ts");

let modrinth = new Modrinth();
let result = await modrinth.projects.get("fabric-api");
console.log(result.name); // Fabric API
```