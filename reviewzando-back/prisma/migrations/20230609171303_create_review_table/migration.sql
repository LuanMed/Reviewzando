-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "poster" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plotScore" DOUBLE PRECISION NOT NULL,
    "flowScore" DOUBLE PRECISION NOT NULL,
    "outcomeScore" DOUBLE PRECISION NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
