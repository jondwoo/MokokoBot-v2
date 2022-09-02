/*
  Warnings:

  - Added the required column `raidName` to the `EmbedMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmbedMessage" ADD COLUMN     "raidName" TEXT NOT NULL,
ALTER COLUMN "msgId" SET DATA TYPE TEXT,
ALTER COLUMN "channelId" SET DATA TYPE TEXT;
