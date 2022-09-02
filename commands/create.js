import { createEmbed } from "../util/index.js";
import commands from "./data/create/raid.js";

export const data = commands;

export async function execute(interaction, prisma) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");
      const { embed, files } = createEmbed(boss);

      const message = await channel.send({
        embeds: [embed],
        files,
      });

      await prisma.embedMessage.upsert({
        where: { id: message.id },
        update: {
          id: message.id,
          channelId: message.channelId,
          createdAt: new Date().toISOString(),
        },
        create: {
          id: message.id,
          channelId: message.channelId,
          raidName: {
            create: {
              name: boss,
            },
          },
        },
      });

      await interaction.reply({
        content: `Created ${boss} raid event`,
        ephemeral: true,
      });
      break;
    }
    default:
      break;
  }
}
