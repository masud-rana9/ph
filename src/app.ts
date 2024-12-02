/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import NotFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// const a =10;
// console.log(a);

//parsers
app.use(express.json());
app.use(cors());

app.use('api/v1', router);

// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

app.use(NotFound);

export default app;
