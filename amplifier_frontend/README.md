# Amplify Frontend

## Overview
Amplify is a Spotify clone built using React for the frontend. It provides a seamless music streaming experience with features like playlist management, song uploads, and authentication.

## Project Structure
```
/amplifier_frontend
│── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│
│── src
│   ├── assets/images
│   │   ├── spotify_logo_white.svg
│   ├── components/shared
│   │   ├── CloudinaryUpload.js
│   │   ├── IconText.js
│   │   ├── PasswordInput.js
│   │   ├── SingleSongCard.js
│   ├── pages
│   │   ├── MyMusic.js
│   │   ├── SearchPage.js
│   │   ├── Signup.js
│   │   ├── SinglePlaylistView.js
│   │   ├── UploadSong.js
│   ├── utils
│   │   ├── CloudinaryService.js
│   │   ├── config.js
│   │   ├── serverHelpers.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── tailwind.config.js
│   ├── craco.config.js
│
│── .gitignore
│── README.md
│── package.json
│── package-lock.json
```

## Installation & Setup
### Prerequisites
Ensure you have Node.js installed on your system.

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
npm start
```
This will start the frontend on `http://localhost:3000/`.

## Key Dependencies
- **React**: Core library for UI development
- **React Router DOM**: Handles navigation and routing
- **Tailwind CSS**: Utility-first styling framework
- **Craco**: Configuration override tool for Create React App
- **Cloudinary**: For image and media uploads
- **Howler.js**: Audio library for seamless music playback

## Build for Production
To generate a production-ready build:
```sh
npm run build
```

## Contribution
Feel free to fork this repository and submit pull requests.

---
**Author:** Gunadeep and Deepak


