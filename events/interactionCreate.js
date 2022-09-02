import { InteractionType } from 'discord.js';
import { connect, connection } from 'mongoose';

export const name = 'interactionCreate';

export async function execute(interaction) {
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yxp4z4k.mongodb.net/${interaction.guild.id}?retryWrites=true&w=majority`
      );
      await command.execute(interaction);
      connection.close();
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  } else if (
    interaction.type === InteractionType.ApplicationCommandAutocomplete
  ) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yxp4z4k.mongodb.net/${interaction.guild.id}?retryWrites=true&w=majority`
      );
      await command.autocomplete(interaction);
      connection.close();
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  }
}
