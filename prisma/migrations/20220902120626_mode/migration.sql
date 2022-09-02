/*
  Warnings:

  - A unique constraint covering the columns `[raidId]` on the table `Mode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mode_raidId_key" ON "Mode"("raidId");
