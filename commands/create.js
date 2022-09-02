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
            .setColor(0x0099ff)
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
            .setColor(0x0099ff)
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
            .setColor(0x0099ff)
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
            .setColor(0x0099ff)
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

      // ideal template
      // const bossEmbed = new EmbedBuilder()
      //   .setColor(0x0099ff)
      //   .setTitle("**Valtan**")
      //   .addFields(
      //     {
      //       name: "__**Normal Mode**__",
      //       value:
      //         "**Sunday**:\n > rome\n > ema\n\n" +
      //         "**Monday**:\n > angie\n > tofu\n",
      //       inline: true,
      //     },
      //     {
      //       name: "__**Hard Mode**__",
      //       value: "**Friday**:\n > rome\n > ema\n > charlie",
      //       inline: true,
      //     }
      //   )
      //   .setImage("attachment://valtan.jpeg");

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
