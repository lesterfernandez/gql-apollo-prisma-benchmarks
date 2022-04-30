"use strict";

const packages = {
  "http+pg": {},
  "http+prisma": {},
  "express+pg": {},
  "express+prisma": {},
  "koa+pg": {},
  "koa+prisma": {},
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
