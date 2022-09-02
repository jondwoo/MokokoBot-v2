import { EmbedBuilder } from "discord.js";

import commands from "./data/create/raid.js";

export const data = commands;

export async function execute(interaction) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");

      // inside a command, event listener, etc.
      const bossEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("**Valtan**")
        .addFields(
          {
            name: "__**Normal Mode**__",
            value:
              "**Sunday**:\n > rome\n > ema\n\n" +
              "**Monday**:\n > angie\n > tofu\n",
            inline: true,
          },
          {
            name: "__**Hard Mode**__",
            value: "**Friday**:\n > rome\n > ema\n > charlie",
            inline: true,
          }
        )
        .setImage("attachment://valtan.jpeg");

      channel.send({
        embeds: [bossEmbed],
        files: ["./assets/valtan.jpeg"],
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
