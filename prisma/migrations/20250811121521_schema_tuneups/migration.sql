/*
  Warnings:

  - Added the required column `techType` to the `Tech` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TechType" AS ENUM ('proglang', 'framework', 'database');

-- AlterTable
ALTER TABLE "public"."Tech" ADD COLUMN     "techType" "public"."TechType" NOT NULL;
