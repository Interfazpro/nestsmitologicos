import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.creature.create({
    data: {
      name: 'Werewolves',
      description:
        'a human with the ability to shapeshift into a wolf, either purposely or after being bitten or otherwise infected with a werewolf curse.',
      lastSee: 'Parque de la madre',
      countLastSee: 3,
      extinct: false,
    },
  });

  const post2 = await prisma.creature.upsert({
    where: { name: 'Vampires' },
    update: {},
    create: {
      name: 'Vampires',
      description:
        'leave its grave at night to drink the blood of the living by biting their necks with long pointed canine teeth.',
      lastSee: 'Calderon Park',
      countLastSee: 5,
      extinct: false,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });