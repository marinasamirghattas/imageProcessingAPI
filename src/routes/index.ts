import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { isImageExist } from '../middlewares/imagecheck';
import resize from '../utilties/imageUtil';

const routes = express.Router();
const baseImagePath: string = path.join(__dirname, `../../assets/fullsize/`);
const resizedImagePath: string = path.join(__dirname, `../../assets/resized/`);

routes.get(
  '/image/:imageName',
  isImageExist,
  (req: Request, res: Response): void => {
    //console.log(__dirname )
    res.sendFile(baseImagePath + `${req.params.imageName}.jpg`);
  }
);

routes.get(
  '/image/:imageName/:imageHeight/:imageWidth',
  isImageExist,
  async (req: Request, res: Response): Promise<void> => {
    if (
      +req.params.imageHeight <= 0 ||
      +req.params.imageWidth <= 0 ||
      isNaN(+req.params.imageHeight) ||
      isNaN(+req.params.imageWidth)
    ) {
      res.send('please enter valid width and height');
    } else {
      //to not resize an image if it already have been resized
      if (
        !fs.existsSync(
          resizedImagePath +
            `${req.params.imageName}${req.params.imageHeight}x${req.params.imageWidth}.jpg`
        )
      ) {
     await resize(req.params.imageName, req.params.imageHeight, req.params.imageWidth);
      }
      res.sendFile(
        resizedImagePath +
          `${req.params.imageName}${req.params.imageHeight}x${req.params.imageWidth}.jpg`
      );
    }
  }
);

export default routes;
