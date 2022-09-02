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
        .setTitle("Valtan")
        .addFields(
          { name: "Regular field title", value: "Some value here" },
          { name: "\u200B", value: "\u200B" },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
          { name: "Inline field title", value: "Some value here", inline: true }
        )
        .addFields({
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        })
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
