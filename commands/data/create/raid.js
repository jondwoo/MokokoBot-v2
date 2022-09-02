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
            { name: "Argos", value: "Argos" },
            { name: "Valtan", value: "Valtan" },
            { name: "Vykas", value: "Vykas" },
            { name: "Kuku", value: "Kuku" }
          )
      )
  );

export default commands;
