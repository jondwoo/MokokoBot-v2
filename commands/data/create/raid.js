import { SlashCommandBuilder } from "discord.js";

const commands = new SlashCommandBuilder()
  .setName("create")
  .setDescription("Raid menu")
  .addSubcommand((subcommand) =>
    subcommand
      .setName("raid")
      .setDescription("Create a Raid event")
      .addStringOption((option) =>
        option
          .setName("boss")
          .setDescription("Name of raid boss")
          .setRequired(true)
          .addChoices(
            { name: "Argos", value: "argos" },
            { name: "Valtan", value: "valtan" },
            { name: "Vykas", value: "vykas" },
            { name: "Kuku", value: "kuku" }
          )
      )
  );

export default commands;
