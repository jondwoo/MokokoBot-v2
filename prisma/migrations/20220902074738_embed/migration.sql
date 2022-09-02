-- CreateTable
CREATE TABLE "EmbedMessage" (
    "id" SERIAL NOT NULL,
    "msgId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmbedMessage_pkey" PRIMARY KEY ("id")
);
