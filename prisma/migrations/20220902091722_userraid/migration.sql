/*
  Warnings:

  - You are about to drop the column `modeId` on the `UserRaid` table. All the data in the column will be lost.
  - Added the required column `raidModeId` to the `UserRaid` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mode" DROP CONSTRAINT "Mode_raidId_fkey";

-- DropForeignKey
ALTER TABLE "UserRaid" DROP CONSTRAINT "UserRaid_modeId_fkey";

-- AlterTable
ALTER TABLE "Mode" ALTER COLUMN "raidId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRaid" DROP COLUMN "modeId",
ADD COLUMN     "raidModeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "RaidMode" (
    "id" TEXT NOT NULL,
    "raidId" TEXT NOT NULL,
    "modeId" TEXT NOT NULL,

    CONSTRAINT "RaidMode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mode" ADD CONSTRAINT "Mode_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_raidModeId_fkey" FOREIGN KEY ("raidModeId") REFERENCES "RaidMode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
