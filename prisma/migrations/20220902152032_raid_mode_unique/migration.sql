/*
  Warnings:

  - A unique constraint covering the columns `[userId,when,raidId,raidMode]` on the table `UserRaid` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserRaid_userId_when_raidId_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserRaid_userId_when_raidId_raidMode_key" ON "UserRaid"("userId", "when", "raidId", "raidMode");
