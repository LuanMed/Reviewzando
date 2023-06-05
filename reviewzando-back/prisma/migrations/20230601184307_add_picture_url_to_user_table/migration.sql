/*
  Warnings:

  - Added the required column `picture_url` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "picture_url" TEXT NOT NULL;
