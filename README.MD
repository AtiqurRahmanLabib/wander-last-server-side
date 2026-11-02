# Wanderlast ✈️

A full-stack travel booking web application built with **Next.js 16, React 19, Express.js, and MongoDB**.

Wanderlast allows users to explore travel destinations, view destination details, manage destinations, and create and manage travel bookings. Authentication is handled using Better Auth with JWT-based verification on the backend.

## Features

- **Explore Destinations** – Browse available travel destinations.
- **Featured Destinations** – Display selected destinations on the homepage.
- **Destination Details** – View detailed information about individual destinations.
- **Destination Management** – Create, edit, and delete destinations.
- **Booking System** – Book destinations and manage bookings.
- **Authentication** – Sign up, log in, and manage sessions using Better Auth.
- **JWT Verification** – Verify authentication tokens on the Express.js backend.
- **Protected Routes** – Restrict selected operations to authenticated users.
- **Responsive Interface** – Modern UI built with Tailwind CSS and reusable components.

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| shadcn/ui | UI components |
| Lucide React | Icons |
| Sonner | Toast notifications |
| Better Auth | Authentication |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API |
| MongoDB | Database |
| MongoDB Node.js Driver | Database operations |
| JOSE | JWT verification |
| CORS | Cross-origin requests |
| dotenv | Environment configuration |

## Project Architecture

Wanderlast uses a separate frontend and backend architecture.

```text
wanderlast/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── destinations/
│   │   │   ├── add-destination/
│   │   │   ├── login/
│   │   │   ├── sign-up/
│   │   │   ├── my-bookings/
│   │   │   └── api/auth/
│   │   │
│   │   ├── components/
│   │   ├── lib/
│   │   └── proxy.ts
│   │
│   ├── public/
│   ├── types.ts
│   ├── package.json
│   └── README.md
│
└── backend/
    ├── server.js
    ├── package.json
    └── .env
```

*The directory structure above illustrates the logical separation of the frontend and backend. Adjust it to match your actual repository layout.*

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 20+
- npm
- MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd wanderlast
```

### 2. Backend Setup

Navigate to your backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the backend root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

The backend API runs at:

```text
http://localhost:8000
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend root:

```env
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

Start the Next.js development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## API Documentation

The Express.js backend provides the following REST API endpoints.

### Destinations

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/destinations` | Retrieve all destinations | No |
| GET | `/featured-destination` | Retrieve featured destinations | No |
| GET | `/destination/:id` | Retrieve destination details | Yes |
| POST | `/add-destination` | Create a destination | Yes |
| PATCH | `/destination/:id` | Update a destination | No* |
| DELETE | `/destination/:id` | Delete a destination | No* |

### Bookings

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| POST | `/booking` | Create a booking | No* |
| GET | `/my-booking/:email` | Retrieve bookings by email | No* |
| DELETE | `/my-booking/:id` | Cancel a booking | No* |

*Authentication status reflects the supplied backend implementation, not the recommended production security configuration.*

### Authentication

Wanderlast uses Better Auth on the frontend and JWT verification on the Express.js backend.

The backend retrieves public signing keys through the Better Auth JWKS endpoint to verify incoming JWTs.

Protected requests use the Bearer token authorization format:

```http
Authorization: Bearer <JWT_TOKEN>
```

Invalid, missing, or expired tokens are rejected by the authentication middleware.

## Database Structure

Wanderlast uses MongoDB for data storage.

**Database:** `wanderlast`

| Collection | Purpose |
|---|---|
| `destination` | Stores travel destination information |
| `Booking` | Stores booking information |

MongoDB automatically generates unique `_id` values for documents.

## Environment Variables

Never commit actual credentials, tokens, or secrets to GitHub.

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `BETTER_AUTH_SECRET` | Better Auth secret |
| `BETTER_AUTH_URL` | Frontend authentication base URL |

Use `.env.example` to document required variables without exposing actual credentials.

## Available Scripts

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Run TypeScript checks |

### Backend

The following commands depend on your backend `package.json` configuration:

| Command | Description |
|---|---|
| `npm run dev` | Start backend development server |
| `npm start` | Start backend server |

## Security Considerations

- Keep environment files out of version control.
- Never expose MongoDB credentials or authentication secrets.
- Validate incoming request data.
- Verify JWTs before performing protected operations.
- Restrict CORS to trusted frontend origins in production.
- Protect all destination modification and booking endpoints with appropriate authentication and authorization.
- Validate MongoDB ObjectIds before database operations.
- Avoid logging sensitive authentication tokens or user information.

## Future Improvements

- Destination search and filtering.
- User profile management.
- Booking status management.
- Improved authorization and ownership checks.
- Payment gateway integration.
- Destination reviews and ratings.
- Admin dashboard.
- Improved error handling and API validation.

## License

This project is developed for educational purposes.

---

**Built with ❤️ using Next.js, Express.js, and MongoDB.**