const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

(async () => {
  await prisma.data.deleteMany();
  await prisma.data.create({ data: {} });
})();
