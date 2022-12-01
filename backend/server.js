const express = require("express");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

// ROUTES
const userRoutes = require("./routes/userRoutes.js");

const app = express();
dotenv.config();
// connexion mongo
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api tourne...");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 2022;

app.listen(PORT, console.log(`Serveur tourne sur la porte ${PORT} 🚀`));
