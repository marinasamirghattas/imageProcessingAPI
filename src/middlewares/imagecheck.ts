import { NextFunction, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

export function isImageExist(req: Request, res: Response, next: NextFunction):void {
  const baseImagePath: string = path.join(
    __dirname,
    `../../assets/fullsize/${req.params.imageName}.jpg`
  );

  if (fs.existsSync(baseImagePath)) {
    next();
  } else {
    res.send('<h1> Make sure chosing existed image</12>');
  }
}
