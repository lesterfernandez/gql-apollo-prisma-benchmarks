"use strict";

const packages = {
  "apollo-server+prisma+nexus": {},
  "apollo-server-express+prisma+nexus": {},
  "apollo-server-fastify+prisma+nexus": {},
  "apollo-server-fastify+prisma": {},
  "apollo-server+prisma": {},
  "apollo-server-express+prisma": {},
  "express-graphql+prisma": {},
  "express+prisma": {},
  "fastify+prisma": {},
  "apollo-server+pg": {},
  "apollo-server-express+pg": {},
  "http+prisma": {},
  "http+pg": {},
  "express+pg": {},
  "fastify+pg": {},
};

const choices = [];
Object.keys(packages).forEach(pkg => {
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
