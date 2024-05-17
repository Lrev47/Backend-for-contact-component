const express = require("express");
const ContactMessageRouter = express.Router();

const {
  getAllMessages,
  getMessageById,
  createMessage,
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

module.exports = ContactMessageRouter;
