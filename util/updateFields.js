import pkg from "p-iteration";
const { map } = pkg;

const updateFields = async (
  prisma,
  boss,
  weekDay,
  user,
  amount,
  mode,
  message
) => {
  const userRaids = await prisma.userRaid.findMany({
    where: {
      raidName: {
        is: {
          name: boss,
        },
      },
      when: weekDay,
    },
  });

  const stringBase = `**${weekDay}**:\n`;
  let newString;

  if (userRaids.length) {
    const users = await map(userRaids, async (userRaid) => {
      return await prisma.user.findUnique({
        where: { id: userRaid.userId },
      });
    });

    // eslint-disable-next-line no-undef
    const userSet = new Set(users.map((user) => user.username));

    // build string for users and day
    const userArray = Array.from(userSet);
    let userStringList = "";
    userArray.forEach((user) => (userStringList += `> ${user} x${amount}\n`));

    newString = stringBase + userStringList;
  } else {
    newString = stringBase + `> ${user} x${amount}\n`;
  }
  message.embeds[0].data.fields.find(
    (f) => f.name === `__**${mode} Mode**__`
  ).value = newString;
};

export default updateFields;
