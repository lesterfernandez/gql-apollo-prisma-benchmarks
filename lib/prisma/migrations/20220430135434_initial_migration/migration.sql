-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "randomString" TEXT NOT NULL DEFAULT E'hello world',

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
