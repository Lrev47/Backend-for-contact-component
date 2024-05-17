const { PrismaClient } = require("@prisma/client");
const contactInfo = require("../DATABASE/DATAcontactMessage");
const prisma = new PrismaClient();

async function makeInitialData() {
  try {
    console.log("Starting the seeding of initial contact info data...");

    const createdContactInfo = await Promise.all(
      contactInfo.map((info) =>
        prisma.contactInfo
          .create({ data: info })
          .then((contact) => ({ id: contact.id, email: contact.email }))
          .catch((error) =>
            console.error(`Failed to create contact: ${info.email}`, error)
          )
      )
    );

    console.log(
      "Seeding completed successfully. Created entries:",
      createdContactInfo
    );
  } catch (error) {
    console.error("An error occurred during seeding:", error);
  } finally {
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
  }
}

makeInitialData();
