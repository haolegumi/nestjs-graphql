-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "display_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "team" TEXT,
    "message" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);
