const express = require("express");
const ContactMessageRouter = express.Router();

const {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
  getMessagesByStatus,
  updateMessageStatus,
} = require("../DATABASE/DBcontactMessage");

// Get all messages
ContactMessageRouter.get("/", async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.send(messages);
  } catch (error) {
    console.error("Failed to get messages:", error);
    res.status(500).send({ message: "Failed to get messages." });
  }
});

// Get a single message by ID
ContactMessageRouter.get("/:id", async (req, res) => {
  try {
    const message = await getMessageById(req.params.id);
    if (message) {
      res.send(message);
    } else {
      res.status(404).send({ message: "Message not found." });
    }
  } catch (error) {
    console.error("Error finding message:", error);
    res.status(500).send({ message: "Error finding message." });
  }
});

// Create a new message
ContactMessageRouter.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await createMessage({ name, email, message });
    res.status(201).send(newMessage);
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).send({ message: "Error creating message." });
  }
});

// Delete a message by ID
ContactMessageRouter.delete("/:id", async (req, res) => {
  try {
    const deletedMessage = await deleteMessage(req.params.id);
    if (deletedMessage) {
      res.send({ message: "Message deleted successfully.", deletedMessage });
    } else {
      res.status(404).send({ message: "Message not found." });
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).send({ message: "Error deleting message." });
  }
});

// Get messages by status
ContactMessageRouter.get("/status/:status", async (req, res) => {
  try {
    const messages = await getMessagesByStatus(req.params.status);
    res.send(messages);
  } catch (error) {
    console.error("Error getting messages by status:", error);
    res.status(500).send({ message: "Error getting messages by status." });
  }
});

// Update message status by ID
ContactMessageRouter.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedMessage = await updateMessageStatus(req.params.id, status);
    if (updatedMessage) {
      res.send(updatedMessage);
    } else {
      res.status(404).send({ message: "Message not found." });
    }
  } catch (error) {
    console.error("Error updating message status:", error);
    res.status(500).send({ message: "Error updating message status." });
  }
});

module.exports = ContactMessageRouter;
