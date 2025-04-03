# 🎵 Amplify Backend 🎵
Amplify is a Spotify clone built with Node.js, Express, and MongoDB. This backend manages authentication, playlists, and songs efficiently.

## 🚀 Features
✅ User authentication (JWT-based)
✅ Playlist management (Create, Read, Update, Delete)
✅ Song management (CRUD operations)
✅ Secure API routes with Passport.js
✅ CORS support for cross-origin requests

## 📂 Project Structure
```
amplifier_backend/
│── models/          # Mongoose models (User, Playlist, Song)
│   │── Playlist.js  # Playlist schema and model
│   │── Song.js      # Song schema and model
│   │── User.js      # User schema and model
│
│── routes/          # API routes (auth, playlist, song)
│   │── auth.js      # Authentication routes
│   │── playlist.js  # Playlist routes
│   │── song.js      # Song routes
│
│── utils/           # Helper functions
│   │── helpers.js   # Utility functions
│
│── .env             # Environment variables
│── README.md        # Documentation
│── index.js         # Main entry point
│── package.json     # Project dependencies
│── package-lock.json
```

## ⚡ Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/amplify-backend.git
   cd amplify-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the server:
   ```sh
   node index.js
   ```

## 🔥 API Endpoints
### Auth
- `POST /auth/register` → Register a new user
- `POST /auth/login` → Login user

### Playlist
- `GET /playlist` → Get all playlists
- `POST /playlist` → Create a new playlist

### Song
- `GET /song` → Get all songs
- `POST /song` → Add a new song

## 📦 Dependencies
| Package       | Version  | Description |
|--------------|---------|-------------|
| bcrypt       | ^5.1.1  | Hashing passwords securely |
| cors         | ^2.8.5  | Enables CORS for cross-origin requests |
| dotenv       | ^16.4.5 | Loads environment variables |
| express      | ^4.21.1 | Web framework for Node.js |
| jsonwebtoken | ^9.0.2  | JWT authentication |
| mongodb      | ^4.17.2 | MongoDB driver |
| mongoose     | ^8.8.1  | ODM for MongoDB |
| passport     | ^0.7.0  | Authentication middleware |
| passport-jwt | ^4.0.1  | JWT strategy for Passport |

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT & Passport

## 📜 License
This project is open-source and free to use.

