/*
  Warnings:

  - You are about to drop the `RaidMode` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Raid` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_modeId_fkey";

-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_raidId_fkey";

-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_userId_fkey";

-- DropTable
DROP TABLE "RaidMode";

-- CreateTable
CREATE TABLE "UserRaid" (
    "id" TEXT NOT NULL,
    "raidId" TEXT NOT NULL,
    "modeId" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "UserRaid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Raid_name_key" ON "Raid"("name");

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
