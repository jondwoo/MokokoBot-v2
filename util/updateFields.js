import pkg from "p-iteration";
const { forEach } = pkg;

const updateFields = async (prisma, boss, newEmbed) => {
  const userRaids = await prisma.userRaid.findMany({
    where: {
      raidName: {
        is: {
          name: boss,
        },
      },
    },
    include: {
      user: true,
      raidName: true,
    },
  });

  // eslint-disable-next-line no-undef
  const modeMap = new Map();

  const allModes = Array.from(
    // eslint-disable-next-line no-undef
    new Set(userRaids.map((raid) => raid.raidMode))
  );

  const allDays = Array.from(
    // eslint-disable-next-line no-undef
    new Set(userRaids.map((raid) => raid.when))
  );

  await forEach(allModes, async (mode) => {
    let value = "";
    await forEach(allDays, async (weekDay) => {
      let formattedUserStringList = "";
      const userRaids = await prisma.userRaid.findMany({
        where: {
          when: weekDay,
          raidMode: mode,
          raidName: {
            is: {
              name: boss,
            },
          },
        },
        include: {
          user: true,
        },
      });

      const users = userRaids.map((userRaid) => ({
        username: userRaid.user.username,
        amount: userRaid.amount,
      }));

      if (users.length) {
        const weekDayString = `__**${weekDay}**__:\n`;
        users.forEach((user) => {
          formattedUserStringList += `> ${user.username} x${user.amount}\n`;
        });

        value += weekDayString + formattedUserStringList + "\n";

        modeMap.set(mode, value);
      }
    });
  });

  const newEmbedFields = [];

  for (const mode of modeMap.keys()) {
    newEmbedFields.push({
      name: `**${mode}**`,
      value: modeMap.get(mode),
      inline: true,
    });
  }

  newEmbed.embed.data.fields = newEmbedFields;
};

export default updateFields;
