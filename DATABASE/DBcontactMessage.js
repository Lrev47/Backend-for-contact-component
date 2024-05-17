const prisma = require("./client.js");
// console.log("Prisma instance:", prisma);

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
    const messageId = parseInt(id, 10);
    const message = await prisma.contactInfo.findUnique({
      where: {
        id: messageId,
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
    const messageId = parseInt(id, 10);
    const deletedMessage = await prisma.contactInfo.delete({
      where: {
        id: messageId,
      },
    });
    return deletedMessage;
  } catch (error) {
    console.error("Failed to delete message:", error);
    throw error;
  }
};

const getMessagesByStatus = async (status) => {
  try {
    const messages = await prisma.contactInfo.findMany({
      where: {
        status: status,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Failed to retrieve messages by status:", error);
    throw error;
  }
};

const updateMessageStatus = async (id, status) => {
  try {
    const messageId = parseInt(id, 10);
    const updatedMessage = await prisma.contactInfo.update({
      where: {
        id: messageId,
      },
      data: {
        status: status,
      },
    });
    return updatedMessage;
  } catch (error) {
    console.error("Failed to update message status:", error);
    throw error;
  }
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
  getMessagesByStatus,
  updateMessageStatus,
};
