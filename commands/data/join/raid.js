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
            { name: "Kakul-Saydon", value: "Kakul-Saydon" }
          )
      )
      .addStringOption((option) =>
        option
          .setName("mode")
          .setDescription("Raid boss difficulty")
          .setRequired(true)
          .setAutocomplete(true)
      )
      .addStringOption((option) =>
        option
          .setName("when")
          .setDescription("Day of event")
          .setRequired(true)
          .addChoices(
            { name: "Sunday", value: "Sunday" },
            { name: "Monday", value: "Monday" },
            { name: "Tuesday", value: "Tuesday" },
            { name: "Wednesday", value: "Wednesday" },
            { name: "Thursday", value: "Thursday" },
            { name: "Friday", value: "Friday" },
            { name: "Saturday", value: "Saturday" }
          )
      )
  );

export default commands;
