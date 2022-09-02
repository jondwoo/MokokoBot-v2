import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";

import commands from "./data/create/raid.js";

export const data = commands;

export async function execute(interaction) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("primary")
          .setLabel("Click me!")
          .setStyle(ButtonStyle.Primary)
      );

      // inside a command, event listener, etc.
      const exampleEmbed = new EmbedBuilder()
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
        .setImage("https://i.imgur.com/AfFp7pu.png")
        .setTimestamp()
        .setFooter({
          text: "Some footer text here",
          iconURL: "https://i.imgur.com/AfFp7pu.png",
        });

      channel.send({ embeds: [exampleEmbed], components: [row] });
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
