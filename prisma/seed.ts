import prisma from "../src/config/database";
import AppLog from "../src/utils/AppLog";

async function main() {
  // await prisma.test.upsert({data})
}

main()
  .catch((err) => {
    AppLog("Error", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
