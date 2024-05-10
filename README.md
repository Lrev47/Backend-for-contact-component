# Contact Form Backend

This is the backend for my contact form component of my personal website. My goal is to build a backend here and be able to view any messages on a custom dashboard or receive an email.

## Tech Stack

- **Backend Framework:** [Express.js](https://expressjs.com/)
- **Language:** JavaScript
- **ORM:** [Prisma](https://www.prisma.io/)

## Getting Started

Follow these instructions to set up and run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14+)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (or another compatible database)

#### API Endpoints

- `POST /api/messages` - Submit a new message
- `GET /api/messages` - Retrieve all messages (for admin dashboard)

#### Example Request

**POST /api/messages**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'm interested in your services."
}
```
