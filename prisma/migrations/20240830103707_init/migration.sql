-- CreateEnum
CREATE TYPE "Genres" AS ENUM ('ACTION', 'HORROR', 'ROMANCE', 'CRIME', 'ANIMATED', 'COMEDY', 'FANTASY', 'SCIENCE_FICTION', 'ADVENTURE', 'MYSTERY', 'DISASTER', 'DRAMA', 'THRILLER', 'WESTERN', 'DOCUMENTARY');

-- CreateEnum
CREATE TYPE "Awards" AS ENUM ('Best_Actor', 'Best_Actress', 'Best_Screenplay', 'Best_Adapted_Screenplay', 'Best_Original_Screenplay', 'Best_Animated_Feature_Film', 'Best_Cinematography', 'Best_Costume_Design', 'Best_Director', 'Best_Film_Editing', 'Best_Foreign_Language_Film');

-- CreateEnum
CREATE TYPE "Occupation" AS ENUM ('ARTIST', 'PRODUCER', 'ACTOR', 'ACTRESS', 'DIRECTOR', 'BUSINESS_MAN', 'PHILANTROPIST');

-- CreateTable
CREATE TABLE "celebrities" (
    "id" TEXT NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "education" VARCHAR(20) NOT NULL,
    "biography" TEXT NOT NULL,
    "occupation" "Occupation"[],
    "awards" "Awards"[],

    CONSTRAINT "celebrities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "date_of_birth" DATE NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "upvote_count" INTEGER NOT NULL DEFAULT 0,
    "movieId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "celebrityId" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(300) NOT NULL,
    "description" TEXT NOT NULL,
    "genre" "Genres"[],
    "date" DATE NOT NULL,
    "duration" INTEGER NOT NULL,
    "rating" VARCHAR(3),
    "awards" "Awards"[],

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CelebrityToMovie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_movieId_key" ON "reviews"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "_CelebrityToMovie_AB_unique" ON "_CelebrityToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_CelebrityToMovie_B_index" ON "_CelebrityToMovie"("B");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_celebrityId_fkey" FOREIGN KEY ("celebrityId") REFERENCES "celebrities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToMovie" ADD CONSTRAINT "_CelebrityToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "celebrities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToMovie" ADD CONSTRAINT "_CelebrityToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
