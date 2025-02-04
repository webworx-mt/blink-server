import router from "./router";
import express, { Request, Response } from 'express';

const startServer = (port: number | string) => {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  app.use('/health', (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default startServer;
