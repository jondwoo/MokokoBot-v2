/*
  Warnings:

  - You are about to drop the column `raidModeId` on the `UserRaid` table. All the data in the column will be lost.
  - You are about to drop the `Mode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RaidMode` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `raidMode` to the `UserRaid` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mode" DROP CONSTRAINT "Mode_raidId_fkey";

-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_modeId_fkey";

-- DropForeignKey
ALTER TABLE "RaidMode" DROP CONSTRAINT "RaidMode_raidId_fkey";

-- DropForeignKey
ALTER TABLE "UserRaid" DROP CONSTRAINT "UserRaid_raidModeId_fkey";

-- AlterTable
ALTER TABLE "UserRaid" DROP COLUMN "raidModeId",
ADD COLUMN     "raidMode" TEXT NOT NULL;

-- DropTable
DROP TABLE "Mode";

-- DropTable
DROP TABLE "RaidMode";
