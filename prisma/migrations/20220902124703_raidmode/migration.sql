-- DropForeignKey
ALTER TABLE "UserRaid" DROP CONSTRAINT "UserRaid_modeId_fkey";

-- AlterTable
ALTER TABLE "UserRaid" ADD COLUMN     "raidModeId" TEXT;

-- CreateTable
CREATE TABLE "RaidMode" (
    "id" TEXT NOT NULL,
    "raidId" TEXT NOT NULL,
    "modeId" TEXT NOT NULL,

    CONSTRAINT "RaidMode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidMode" ADD CONSTRAINT "RaidMode_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRaid" ADD CONSTRAINT "UserRaid_raidModeId_fkey" FOREIGN KEY ("raidModeId") REFERENCES "RaidMode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
