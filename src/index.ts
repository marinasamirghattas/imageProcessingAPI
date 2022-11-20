// const myFunc=(num :number)=> num*5;

// export default myFunc;
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
const port: number = 3000;

//use morgan
app.use(morgan(':method :url :status :http-version :response-time '));
app.use(routes);

app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});

//Not found
app.use((req: Request, res: Response): void => {
  res
    .status(404)
    .send(
      '<h1>404 Page not found please enter a valid url including the image name  and in case of resizing add width and height</h1>'
    );
});

export default app;
