/*
  Warnings:

  - You are about to drop the column `raidModeId` on the `UserRaid` table. All the data in the column will be lost.
  - You are about to drop the `RaidMode` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `modeId` to the `UserRaid` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_modeId_fkey";

-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_raidId_fkey";

-- DropForeignKey
ALTER TABLE "UserRaid" DROP CONSTRAINT "UserRaid_raidModeId_fkey";

-- AlterTable
ALTER TABLE "UserRaid" DROP COLUMN "raidModeId",
ADD COLUMN     "modeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "RaidMode";

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
