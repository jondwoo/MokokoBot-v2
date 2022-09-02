import { EmbedBuilder } from "discord.js";

const createEmbed = (boss) => {
  let embed;
  let files;

  switch (boss) {
    case "Argos": {
      embed = new EmbedBuilder()
        .setColor(0x49ff61)
        .setTitle("**Argos**")
        .addFields({
          name: "__**Normal Mode**__",
          value: "\u200B",
          inline: true,
        })
        .setImage("attachment://argos.jpg");

      files = ["./assets/argos.jpg"];

      return { embed, files };
    }

    case "Valtan": {
      embed = new EmbedBuilder()
        .setColor(0x3e7bff)
        .setTitle("**Valtan**")
        .addFields(
          {
            name: "__**Normal Mode**__",
            value: "\u200B",
            inline: true,
          },
          {
            name: "__**Hard Mode**__",
            value: "\u200B",
            inline: true,
          }
        )
        .setImage("attachment://valtan.jpg");

      files = ["./assets/valtan.jpg"];

      return { embed, files };
    }

    case "Vykas": {
      embed = new EmbedBuilder()
        .setColor(0xf32626)
        .setTitle("**Vykas**")
        .addFields(
          {
            name: "__**Normal Mode**__",
            value: "\u200B",
            inline: true,
          },
          {
            name: "__**Hard Mode**__",
            value: "\u200B",
            inline: true,
          }
        )
        .setImage("attachment://vykas.jpg");

      files = ["./assets/vykas.jpg"];

      return { embed, files };
    }

    case "Kakul-Saydon": {
      embed = new EmbedBuilder()
        .setColor(0x9a2fff)
        .setTitle("**Kakul-Saydon**")
        .addFields({
          name: "__**Normal Mode**__",
          value: "\u200B",
          inline: true,
        })
        .setImage("attachment://kakul.jpg");

      files = ["./assets/kakul.jpg"];

      return { embed, files };
    }
    default:
      break;
  }
};

export default createEmbed;
