import { EmbedBuilder } from "discord.js";

import commands from "./data/create/raid.js";

export const data = commands;

export async function autocomplete(interaction) {
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "delete":
      // {
      //   const focusedValue = interaction.options.getFocused();
      //   const weekDay = interaction.options.getString("weekday");
      //
      //   const choices = await find({ weekDay }, { _id: false })
      //     .lean()
      //     .select("-__v")
      //     .exec();
      //   const filtered = choices
      //     .map((choice) => choice.name)
      //     .filter((choice) => choice.startsWith(focusedValue));
      //
      //   await interaction.respond(
      //     filtered.map((choice) => ({ name: choice, value: choice }))
      //   );
      // }
      break;
    default:
      break;
  }
}

export async function execute(interaction) {
  const channel = interaction.channel;
  const subCommand = interaction.options.getSubcommand();

  switch (subCommand) {
    case "raid":
      console.log("hello");
      await interaction.reply({
        content: `creating`,
        ephemeral: true,
      });
      // {
      //   const weekDay = interaction.options.getString("weekday");
      //   const eventName = interaction.options.getString("input");
      //   await new WeeklyEvent({ weekDay, name: eventName }).save();
      //
      //   const eventMessage = await _findOne({}, { _id: false })
      //     .lean()
      //     .select("-__v")
      //     .exec();
      //
      //   if (!eventMessage) {
      //     const eventsEmbed = new EmbedBuilder()
      //       .setColor(39423)
      //       .setTitle("Weekly Events")
      //       .addFields(
      //         {
      //           name: "Sunday",
      //           value: await getEvents("Sunday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Monday",
      //           value: await getEvents("Monday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Tuesday",
      //           value: await getEvents("Tuesday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Wednesday",
      //           value: await getEvents("Wednesday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Thursday",
      //           value: await getEvents("Thursday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Friday",
      //           value: await getEvents("Friday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Saturday",
      //           value: await getEvents("Saturday"),
      //           inline: true,
      //         }
      //       );
      //
      //     const message = await channel.send({ embeds: [eventsEmbed] });
      //     await new EventMessage({
      //       id: message.id,
      //       channelId: message.channelId,
      //     }).save();
      // await interaction.reply({
      //   content: `Created ${eventName} for ${weekDay}`,
      //   ephemeral: true,
      // });
      //   } else {
      //     const updatedEmbed = new EmbedBuilder()
      //       .setColor(39423)
      //       .setTitle("Weekly Events")
      //       .addFields(
      //         {
      //           name: "Sunday",
      //           value: await getEvents("Sunday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Monday",
      //           value: await getEvents("Monday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Tuesday",
      //           value: await getEvents("Tuesday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Wednesday",
      //           value: await getEvents("Wednesday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Thursday",
      //           value: await getEvents("Thursday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Friday",
      //           value: await getEvents("Friday"),
      //           inline: true,
      //         },
      //         {
      //           name: "Saturday",
      //           value: await getEvents("Saturday"),
      //           inline: true,
      //         }
      //       );
      //
      //     const message = await interaction.client.channels.cache
      //       .get(eventMessage.channelId)
      //       .messages.fetch(eventMessage.id);
      //
      //     message.edit({ embeds: [updatedEmbed] });
      //
      //     await interaction.reply({
      //       content: `Created ${eventName} for ${weekDay}`,
      //       ephemeral: true,
      //     });
      //   }
      // }
      break;
    default:
      break;
  }
}
