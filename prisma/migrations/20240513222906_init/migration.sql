-- CreateTable
CREATE TABLE "Creature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "last" TEXT NOT NULL,
    "countLastSee" INTEGER NOT NULL,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
    
);

-- CreateIndex
CREATE UNIQUE INDEX "Creature_name_key" ON "Creature"("name");
