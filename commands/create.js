import { EmbedBuilder } from "discord.js";

import commands from "./data/create/raid.js";

export const data = commands;

export async function execute(interaction) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");
      let bossEmbed;
      let files;

      switch (boss) {
        case "Argos": {
          bossEmbed = new EmbedBuilder()
            .setColor(0x49ff61)
            .setTitle("**Argos**")
            .addFields({
              name: "__**Normal Mode**__",
              value: "\u200B",
              inline: true,
            })
            .setImage("attachment://argos.jpg");

          files = ["./assets/argos.jpg"];
          break;
        }

        case "Valtan": {
          bossEmbed = new EmbedBuilder()
            .setColor(0x3e7bff)
            .setTitle("**Valtan**")
            .addFields(
              {
                name: "__**Normal Mode**__",
                value: "\u200B",
                inline: true,
              },
              {
                name: "__**Hard Mode**__",
                value: "\u200B",
                inline: true,
              }
            )
            .setImage("attachment://valtan.jpg");

          files = ["./assets/valtan.jpg"];
          break;
        }

        case "Vykas": {
          bossEmbed = new EmbedBuilder()
            .setColor(0xf32626)
            .setTitle("**Vykas**")
            .addFields(
              {
                name: "__**Normal Mode**__",
                value: "\u200B",
                inline: true,
              },
              {
                name: "__**Hard Mode**__",
                value: "\u200B",
                inline: true,
              }
            )
            .setImage("attachment://vykas.jpg");

          files = ["./assets/vykas.jpg"];
          break;
        }

        case "Kakul-Saydon": {
          bossEmbed = new EmbedBuilder()
            .setColor(0x9a2fff)
            .setTitle("**Kakul-Saydon**")
            .addFields({
              name: "__**Normal Mode**__",
              value: "\u200B",
              inline: true,
            })
            .setImage("attachment://kakul.jpg");

          files = ["./assets/kakul.jpg"];
          break;
        }
        default:
          break;
      }

      channel.send({
        embeds: [bossEmbed],
        files,
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
