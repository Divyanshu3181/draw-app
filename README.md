🖌️ Draw-App
A collaborative drawing application similar to Excalidraw, allowing users to create and share drawings in real-time. Users can join rooms, draw shapes, erase, and move elements while communicating through WebSockets.

🚀 Features
User Authentication: Sign up and sign in securely.
Room Management: Create or join a drawing room.
Real-time Collaboration:
Multiple users in the same room can draw together in real time.
Live updates of drawings across all connected users.
Drawing Tools:
Pencil ✏️
Rectangle ▭
Circle ⭕
Eraser 🧽
Move Objects 🔄
Chat Feature: Communicate with other users in the room.
Monorepo Setup: Managed using TurboRepo.
🛠 Tech Stack
Frontend: Next.js, TypeScript
Backend: HTTP Server, WebSockets
Database: PostgreSQL
Real-time Sync: WebSockets (ws)
Monorepo Management: TurboRepo
📦 Installation
Clone the repository:

sh
Copy
Edit
git clone https://github.com/yourusername/draw-app.git  
cd draw-app  
Setup Backend
Navigate to the backend directory:
sh
Copy
Edit
cd packages/backend
Install dependencies:
sh
Copy
Edit
npm install
Set up environment variables (.env file):
env
Copy
Edit
DATABASE_URL=your_postgres_url
JWT_SECRET=your_jwt_secret
Start the backend server:
sh
Copy
Edit
npm run dev
Setup Frontend
Navigate to the frontend directory:
sh
Copy
Edit
cd packages/frontend
Install dependencies:
sh
Copy
Edit
npm install
Start the frontend app:
sh
Copy
Edit
npm run dev
🚀 Running the App
Once both frontend and backend are running, open http://localhost:3000 to start drawing!

🎨 Screenshots (Optional)
(Add screenshots showcasing the app UI here)

🤝 Contributing
Fork the repository.
Create a new branch:
sh
Copy
Edit
git checkout -b feature-name
Commit changes and push:
sh
Copy
Edit
git commit -m "Added new feature"
git push origin feature-name
Open a pull request.
📜 License
This project is licensed under the MIT License.

