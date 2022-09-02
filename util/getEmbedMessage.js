const getEmbedMessage = async (boss, prisma, interaction) => {
  const raid = await prisma.raid.findUnique({
    where: {
      name: boss,
    },
  });

  const embedMessage = await prisma.embedMessage.findUnique({
    where: {
      raidId: raid.id,
    },
  });

  const { id, channelId } = embedMessage;

  return await interaction.client.channels.cache
    .get(channelId)
    .messages.fetch(id);
};

export default getEmbedMessage;
