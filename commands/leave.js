import { createEmbed, getEmbedMessage, updateFields } from "../util/index.js";
import commands from "./data/leave/raid.js";

export const data = commands;

export async function autocomplete(interaction) {
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid":
      {
        const focusedValue = interaction.options.getFocused();
        const boss = interaction.options.getString("boss");

        let choices = [];

        switch (boss) {
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
      await interaction.deferReply({ ephemeral: true });

      const boss = interaction.options.getString("boss");
      const mode = interaction.options.getString("mode");
      const weekDay = interaction.options.getString("when");

      const message = await getEmbedMessage(boss, prisma, interaction);
      const newEmbed = createEmbed(boss);

      const raid = await prisma.raid.findUnique({
        where: {
          name: boss,
        },
      });

      try {
        await prisma.userRaid.delete({
          where: {
            userId_when_raidId_raidMode: {
              userId: interaction.user.id,
              when: weekDay,
              raidId: raid.id,
              raidMode: mode,
            },
          },
        });
        await updateFields(prisma, boss, newEmbed);

        const files = newEmbed.files;
        await message.edit({
          embeds: [newEmbed.embed],
          files,
        });

        await interaction.editReply({
          content: `Left ${boss} ${mode} on ${weekDay}`,
          ephemeral: true,
        });
      } catch (error) {
        await interaction.editReply({
          content: "You are not in this raid",
          ephemeral: true,
        });
      }

      break;
    }
    default:
      break;
  }
}
