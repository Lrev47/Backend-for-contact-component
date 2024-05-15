const { PrismaClient } = require("@prisma/client");
const contactInfo = require("../DATAcontactMessage");
const prisma = new PrismaClient();

async function makeInitialData() {
    try {
        console.log("Creating the initial contact info data");

       
        const createdContactInfo = await Promise.all(
            contactInfo.map((info) =>
                prisma.contactInfo.create({ data: info })
            )
        );

        console.log("Seeding completed successfully.", createdContactInfo);
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        await prisma.$disconnect();
    }
}

makeInitialData();
