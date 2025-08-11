-- CreateTable
CREATE TABLE "public"."Tech" (
    "id" SERIAL NOT NULL,
    "tech_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "slug" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProjectTech" (
    "projectId" INTEGER NOT NULL,
    "techId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTech_pkey" PRIMARY KEY ("projectId","techId")
);

-- CreateTable
CREATE TABLE "public"."About" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "bio" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "email" TEXT NOT NULL,
    "linkedin" TEXT,
    "github" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tech_tech_name_key" ON "public"."Tech"("tech_name");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "public"."Project"("slug");

-- CreateIndex
CREATE INDEX "Project_createdAt_idx" ON "public"."Project"("createdAt");

-- CreateIndex
CREATE INDEX "ProjectTech_projectId_idx" ON "public"."ProjectTech"("projectId");

-- CreateIndex
CREATE INDEX "ProjectTech_techId_idx" ON "public"."ProjectTech"("techId");

-- AddForeignKey
ALTER TABLE "public"."ProjectTech" ADD CONSTRAINT "ProjectTech_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectTech" ADD CONSTRAINT "ProjectTech_techId_fkey" FOREIGN KEY ("techId") REFERENCES "public"."Tech"("id") ON DELETE CASCADE ON UPDATE CASCADE;
