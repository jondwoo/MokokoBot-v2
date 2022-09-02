import updateFields from "../util/updateFields.js";
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
          case "Kakul":
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

export async function execute(interaction, prisma) {
  const subCommand = interaction.options.getSubcommand();

  const getEmbedMessage = async (boss) => {
    const raid = await prisma.raid.findUnique({
      where: {
        name: boss,
      },
    });

    const embedMessage = await prisma.embedMessage.findUnique({
      where: {
        raidId: raid.id,
      },
    });

    const { id, channelId } = embedMessage;

    return await interaction.client.channels.cache
      .get(channelId)
      .messages.fetch(id);
  };

  switch (subCommand) {
    case "raid": {
      const boss = interaction.options.getString("boss");
      const mode = interaction.options.getString("mode");
      const weekDay = interaction.options.getString("when");
      const amount = interaction.options.getInteger("amount");

      const user = await prisma.user.upsert({
        where: { id: interaction.user.id },
        update: {
          username: interaction.user.username,
        },
        create: {
          id: interaction.user.id,
          guildId: interaction.guildId,
          username: interaction.user.username,
        },
      });

      // const user = await prisma.user.upsert({
      //   where: { id: interaction.user.id },
      //   update: {
      //     username: interaction.user.username,
      //     userRaid: {
      //       create: {
      //         when: weekDay,
      //         amount,
      //         raidName: {
      //           connect: {
      //             name: boss,
      //           },
      //         },
      //         raidMode: {
      //           create: {
      //             raidName: {
      //               connect: {
      //                 name: boss,
      //               },
      //             },
      //             mode: {
      //               create: {
      //                 level: mode,
      //                 raid: {
      //                   connect: {
      //                     name: boss,
      //                   },
      //                 },
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   create: {
      //     id: interaction.user.id,
      //     guildId: interaction.guildId,
      //     username: interaction.user.username,
      //     userRaid: {
      //       create: {
      //         when: weekDay,
      //         amount,
      //         raidName: {
      //           connect: {
      //             name: boss,
      //           },
      //         },
      //         raidMode: {
      //           create: {
      //             raidName: {
      //               connect: {
      //                 name: boss,
      //               },
      //             },
      //             mode: {
      //               create: {
      //                 level: mode,
      //                 raid: {
      //                   connect: {
      //                     name: boss,
      //                   },
      //                 },
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // });

      const message = await getEmbedMessage(boss);
      await updateFields(
        prisma,
        boss,
        weekDay,
        user.username,
        amount,
        mode,
        message
      );

      message.edit({ embeds: [message.embeds[0]], files: [] });

      await interaction.reply({
        content: `Joined ${boss} ${mode} on ${weekDay} for ${amount} run(s)`,
        ephemeral: true,
      });
      break;
    }
    default:
      break;
  }
}
