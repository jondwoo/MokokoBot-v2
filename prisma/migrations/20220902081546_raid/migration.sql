/*
  Warnings:

  - A unique constraint covering the columns `[raidName]` on the table `EmbedMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EmbedMessage_raidName_key" ON "EmbedMessage"("raidName");
