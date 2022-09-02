/*
  Warnings:

  - You are about to drop the column `msgId` on the `EmbedMessage` table. All the data in the column will be lost.
  - You are about to drop the column `raidName` on the `EmbedMessage` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[raidId]` on the table `EmbedMessage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `raidId` to the `EmbedMessage` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "EmbedMessage_raidName_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "EmbedMessage" DROP COLUMN "msgId",
DROP COLUMN "raidName",
ADD COLUMN     "raidId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "name" SET NOT NULL;
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Mode" (
    "id" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "raidId" TEXT NOT NULL,

    CONSTRAINT "Mode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Raid" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Raid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaidMode" (
    "id" TEXT NOT NULL,
    "raidId" TEXT NOT NULL,
    "modeId" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "RaidMode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmbedMessage_raidId_key" ON "EmbedMessage"("raidId");

-- AddForeignKey
ALTER TABLE "EmbedMessage" ADD CONSTRAINT "EmbedMessage_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mode" ADD CONSTRAINT "Mode_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
