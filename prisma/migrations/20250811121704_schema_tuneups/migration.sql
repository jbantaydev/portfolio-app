/*
  Warnings:

  - You are about to drop the column `tech_name` on the `Tech` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[techName]` on the table `Tech` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `techName` to the `Tech` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Tech_tech_name_key";

-- AlterTable
ALTER TABLE "public"."Tech" DROP COLUMN "tech_name",
ADD COLUMN     "techName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tech_techName_key" ON "public"."Tech"("techName");
