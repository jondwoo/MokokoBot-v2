/*
  Warnings:

  - The primary key for the `EmbedMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "EmbedMessage" DROP CONSTRAINT "EmbedMessage_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "EmbedMessage_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EmbedMessage_id_seq";
