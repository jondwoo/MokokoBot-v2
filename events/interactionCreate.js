import { PrismaClient } from "@prisma/client";
import { InteractionType } from "discord.js";

// import { connect, connection } from "mongoose";

export const name = "interactionCreate";

export async function execute(interaction) {
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      const prisma = new PrismaClient();

      await command.execute(interaction, prisma);
      await prisma.$disconnect();
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  } else if (
    interaction.type === InteractionType.ApplicationCommandAutocomplete
  ) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.autocomplete(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
}
