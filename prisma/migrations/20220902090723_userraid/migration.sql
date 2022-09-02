/*
  Warnings:

  - You are about to drop the column `mode` on the `Mode` table. All the data in the column will be lost.
  - Added the required column `level` to the `Mode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mode" DROP COLUMN "mode",
ADD COLUMN     "level" TEXT NOT NULL;
