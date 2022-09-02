import { AttachmentBuilder, EmbedBuilder } from "discord.js";

import { createEmbed, getEmbedMessage, updateFields } from "../util/index.js";
import commands from "./data/join/raid.js";

export const data = commands;

export async function autocomplete(interaction) {
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid":
      {
        const focusedValue = interaction.options.getFocused();
        const raidBoss = interaction.options.getString("boss");

        let choices = [];

        switch (raidBoss) {
          case "Argos":
            choices = [{ name: "Normal", value: "Normal" }];
            break;
          case "Valtan":
            choices = [
              { name: "Normal", value: "Normal" },
              { name: "Hard", value: "Hard" },
            ];
            break;
          case "Vykas":
            choices = [
              { name: "Normal", value: "Normal" },
              { name: "Hard", value: "Hard" },
            ];
            break;
          case "Kakul":
            choices = [{ name: "Normal", value: "Normal" }];
            break;
          default:
            break;
        }

        const filtered = choices
          .map((choice) => choice.name)
          .filter((choice) => choice.startsWith(focusedValue));

        await interaction.respond(
          filtered.map((choice) => ({ name: choice, value: choice }))
        );
      }
      break;
    default:
      break;
  }
}

export async function execute(interaction, prisma) {
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");
      const mode = interaction.options.getString("mode");
      const weekDay = interaction.options.getString("when");
      const amount = interaction.options.getInteger("amount");

      const user = await prisma.user.upsert({
        where: { id: interaction.user.id },
        update: {
          username: interaction.user.username,
        },
        create: {
          id: interaction.user.id,
          guildId: interaction.guildId,
          username: interaction.user.username,
        },
      });

      const raid = await prisma.raid.findUnique({
        where: {
          name: boss,
        },
      });

      const userRaid = await prisma.userRaid.upsert({
        where: {
          userId_when_raidId_raidMode: {
            userId: user.id,
            when: weekDay,
            raidId: raid.id,
            raidMode: mode,
          },
        },
        update: {},
        create: {
          when: weekDay,
          amount,
          raidName: {
            connect: {
              name: boss,
            },
          },
          user: {
            connect: {
              id: user.id,
            },
          },
          raidMode: mode,
        },
      });

      const message = await getEmbedMessage(boss, prisma, interaction);
      const newEmbed = createEmbed(boss);

      await updateFields(prisma, boss, newEmbed);

      await message.edit({
        embeds: [newEmbed],
        files: [],
      });

      await interaction.reply({
        content: `Joined ${boss} ${mode} on ${weekDay} for ${amount} run(s)`,
        ephemeral: true,
      });
      break;
    }
    default:
      break;
  }
}
