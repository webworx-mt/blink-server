import express from "express";
import router from "./router";

const startServer = (port: number | string) => {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default startServer;
