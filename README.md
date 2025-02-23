# 🖌️ Draw-App

A collaborative drawing application similar to Excalidraw, allowing users to create and share drawings in real-time. Users can join rooms, draw shapes, erase, and move elements while communicating through WebSockets.

## 🚀 Features

- **User Authentication**: Sign up and sign in securely.  
- **Room Management**: Create or join a drawing room.  
- **Real-time Collaboration**:  
  - Multiple users in the same room can draw together in real time.  
  - Live updates of drawings across all connected users.  
- **Drawing Tools**:  
  - Pencil ✏️  
  - Rectangle ▭  
  - Circle ⭕  
  - Eraser 🧽  
  - Move Objects 🔄  
- **Chat Feature**: Communicate with other users in the room.  
- **Monorepo Setup**: Managed using TurboRepo.  

## 🛠 Tech Stack

- **Frontend**: Next.js, TypeScript  
- **Backend**: HTTP Server, WebSockets  
- **Database**: PostgreSQL  
- **Real-time Sync**: WebSockets (ws)  
- **Monorepo Management**: TurboRepo  

## 📦 Installation

Clone the repository:  
```sh
git clone https://github.com/yourusername/draw-app.git  
cd draw-app  
```

### Setup Backend

1. Navigate to the backend directory:  
   ```sh
   cd packages/backend
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Set up environment variables (`.env` file):  
   ```env
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:  
   ```sh
   npm run dev
   ```

### Setup Frontend

1. Navigate to the frontend directory:  
   ```sh
   cd packages/frontend
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the frontend app:  
   ```sh
   npm run dev
   ```

## 🚀 Running the App

Once both frontend and backend are running, open [http://localhost:3000](http://localhost:3000) to start drawing!  

## 🎨 Screenshots (Optional)

*(Add screenshots showcasing the app UI here)*  

## 🤝 Contributing

1. Fork the repository.  
2. Create a new branch:  
   ```sh
   git checkout -b feature-name
   ```
3. Commit changes and push:  
   ```sh
   git commit -m "Added new feature"
   git push origin feature-name
   ```
4. Open a pull request.  

## 📜 License

This project is licensed under the **MIT License**.  
