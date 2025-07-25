// import "dotenv/config";
// import express from 'express';
// import compression from "compression";
// import cookieParser from "cookie-parser";
// import connectMongodb from "./config/db_config.js";


// // Routes
// import authRoute from "./modules/auth.module/authRoutes.js";
// import userRoute from "./modules/user.module/userRoutes.js";
// import messageRoute from "./modules/message.module/messageRoutes.js";

// // const app = express();
// import { app, server } from "./socket/socket.js";
// // const __dirname = path.resolve();
// const PORT = process.env.PORT || 5000;

// // app.use(express.static(path.join(__dirname, "..","meChat-app", "dist")));
// import cors from 'cors'

// // Enable CORS with specific origin
// app.use(cors({
//   origin: 'http://localhost:5173', // Your frontend URL
//   credentials: true, // Allow credentials (cookies) to be sent
// }));
// app.use(compression());
// app.use(express.json());
// app.use(cookieParser());
// app.use("/api/auth/", authRoute);
// app.use("/api/users/", userRoute);
// app.use("/api/message/", messageRoute);


// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../meChat-app", "dist", "index.html"));
// // });


// server.listen(PORT, () => {
//   connectMongodb()
//   console.log(`server is running on http://localhost:${PORT}`)
// });



import "dotenv/config";
import express from 'express';
import compression from "compression";
import cookieParser from "cookie-parser";
import connectMongodb from "./config/db_config.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Routes
import authRoute from "./modules/auth.module/authRoutes.js";
import userRoute from "./modules/user.module/userRoutes.js";
import messageRoute from "./modules/message.module/messageRoutes.js";

// Initialize express app and socket server
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

// CORS setup
const corsOptions = {
  // origin: 'production' === 0 ? true : 'http://localhost:5173',
  origin: 'production' === 0 ? true : 'https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev',

  credentials: true, 
};

app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/message/", messageRoute);

// Serve frontend in production
if ('production' === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'mechat-app', 'dist'))); 
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'mechat-app', 'dist', 'index.html')); // Serve index.html for all routes
    });
  }
  

// Start server
server.listen(PORT, () => {
  connectMongodb();
  console.log(`Server is running`);
});
