import { EmbedBuilder } from "discord.js";

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
          case "Kuku":
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

export async function execute(interaction) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");
      const mode = interaction.options.getString("mode");

      // // inside a command, event listener, etc.
      // const bossEmbed = new EmbedBuilder()
      //   .setColor(0x0099ff)
      //   .setTitle("Valtan")
      //   .addFields(
      //     { name: "Regular field title", value: "Some value here" },
      //     { name: "\u200B", value: "\u200B" },
      //     {
      //       name: "Inline field title",
      //       value: "Some value here",
      //       inline: true,
      //     },
      //     { name: "Inline field title", value: "Some value here", inline: true }
      //   )
      //   .addFields({
      //     name: "Inline field title",
      //     value: "Some value here",
      //     inline: true,
      //   })
      //   .setImage("attachment://valtan.jpeg");
      //
      // channel.send({
      //   embeds: [bossEmbed],
      //   files: ["./assets/valtan.jpeg"],
      // });
      await interaction.reply({
        content: `Joined ${boss} ${mode} raid event`,
        ephemeral: true,
      });
      break;
    }
    default:
      break;
  }
}