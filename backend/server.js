import express from "express";
import cors from "cors";
import "dotenv/config.js";

import recipeRoutes from "./routes/recipeRoutes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/recipes", recipeRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
