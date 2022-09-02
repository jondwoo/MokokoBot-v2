import { SlashCommandBuilder } from "discord.js";

const commands = new SlashCommandBuilder()
  .setName("join")
  .setDescription("Join an event")
  .addSubcommand((subcommand) =>
    subcommand
      .setName("raid")
      .setDescription("Join a raid")
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
      .addStringOption((option) =>
        option
          .setName("mode")
          .setDescription("Raid boss difficulty")
          .setRequired(true)
          .setAutocomplete(true)
      )
  );

export default commands;
