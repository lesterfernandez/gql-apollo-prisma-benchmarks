"use strict";

const { dependencies } = require("../package");

const packages = {
  bare: { version: "10.13.0" },
  express: {},
  fastify: { checked: true },
  koa: {},
};

const choices = [];
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package;
    const version = require(require.resolve(
      module + "/package.json"
    )).version;
    packages[pkg].version = version;
  }
  choices.push(pkg);
});

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices
      .map(c => {
        return extra === !!packages[c].extra
          ? Object.assign({}, packages[c], { name: c })
          : null;
      })
      .filter(c => c);
  },

  info: module => {
    return packages[module];
  },
};
