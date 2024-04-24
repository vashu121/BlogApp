# Medium Clone

This is a Medium-like application built with a modern tech stack, including React, Cloudflare Workers, Zod, TypeScript, Prisma, PostgreSQL, and JWT.

## Features

- Create, read, update, and delete blog posts
- User authentication and authorization with JWT
- Rich text editing for posts
- Responsive design for optimal viewing on various devices

## Tech Stack

**Frontend:**
- React
- TypeScript
- Zod (for data validation)

**Backend:**
- Cloudflare Workers
- TypeScript
- Zod (for data validation)
- Prisma (ORM for PostgreSQL)
- PostgreSQL (database)
- JWT (for authentication)

## Getting Started

### Prerequisites

- Node.js
- npm (or yarn)
- PostgreSQL (local or remote instance)
- Cloudflare account (for deploying Workers)

### Installation

1. Clone the repository:
2. Set up the PostgreSQL database and update the Prisma schema and connection string accordingly.

3. Configure environment variables for the backend (e.g., database URL, JWT secret).

### Development

To start the development server for the frontend and backend, run:
### Building and Deploying

#### Frontend

To build the frontend for production, run:
Deploy the built files to a hosting service of your choice.

#### Backend

To deploy the Cloudflare Workers, follow the official Cloudflare documentation: [https://developers.cloudflare.com/workers/](https://developers.cloudflare.com/workers/)

## Contributing

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).