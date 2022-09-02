import * as express from 'express';
import 'express-async-errors'
import errorMiddleware from './middleware/ErrorMiddleware';
import userRouter from './routes/userRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/serverStatus', (req, res) => res.json({ ok: true }));
  }
  
  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/user', userRouter);
    this.app.use(errorMiddleware)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();