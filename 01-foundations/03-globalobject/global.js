#!/usr/bin/env node

// console.log(global);

console.log("Node.js version: ",process.versions.node);
console.log("V8 version: ", process.versions.v8);

const { versions: {node, v8} } = process,
      output = `Node.js version: ${node}\n V8 version: ${v8}`;

console.log(output);
