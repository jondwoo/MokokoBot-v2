/*
  Warnings:

  - A unique constraint covering the columns `[userId,when,raidId]` on the table `UserRaid` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserRaid_userId_when_raidId_key" ON "UserRaid"("userId", "when", "raidId");
