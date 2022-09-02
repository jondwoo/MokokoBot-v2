import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { fileURLToPath } from 'url';

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Dynamically import commands
client.commands = new Collection();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = await import(filePath);
  client.commands.set(command.default.data.name, command);
}

// Dynamically import events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = await import(filePath);

  if (event.once) {
    client.once(event.default.name, (...args) =>
      event.default.execute(...args)
    );
  } else {
    client.on(event.default.name, (...args) => event.default.execute(...args));
  }
}

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
