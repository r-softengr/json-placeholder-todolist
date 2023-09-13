import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(express.json());
app.use(cors(corsOpts));
// Define routes

// Example: Fetch all posts from JSONPlaceholder
app.get("/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
