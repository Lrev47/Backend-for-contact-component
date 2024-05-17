const prisma = require("./client.js");
console.log("Prisma instance:", prisma);

const getAllMessages = async () => {
  try {
    const messages = await prisma.contactInfo.findMany();
    return messages;
  } catch (error) {
    console.error("Failed to retrieve messages:", error);
    throw error;
  }
};

const getMessageById = async (id) => {
  try {
    const message = await prisma.contactInfo.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return message;
  } catch (error) {
    console.error("Failed to retrieve message by ID:", error);
    throw error;
  }
};
const createMessage = async (messageData) => {
  try {
    const newMessage = await prisma.contactInfo.create({
      data: {
        name: messageData.name,
        email: messageData.email,
        message: messageData.message,
      },
    });
    return newMessage;
  } catch (error) {
    console.error("Failed to create message:", error);
    throw error;
  }
};

const deleteMessage = async (id) => {
  try {
    const deletedMessage = await prisma.contactInfo.delete({
      where: {
        id: id,
      },
    });
    return deletedMessage;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};
