import express from "express";
import path from "path";
import sharp from "sharp";

const routes=express.Router();
const baseImagePath=path.join(__dirname,`../../assets/fullsize/`)
const resizedImagePath=path.join(__dirname,`../../assets/resized/`)


routes.get('/image/:imageName',(req,res)=>{
//console.log(__dirname )
    res.sendFile(baseImagePath+`${req.params.imageName}.jpg`);
});


routes.get('/image/:imageName/:imageHeight/:imageWidth',async(req,res)=>{
    if(+req.params.imageHeight<=0||+req.params.imageWidth<=0||isNaN(+req.params.imageHeight)||isNaN(+req.params.imageWidth)){
        res.send('please enter valid width and height')
    }else{
  await sharp(baseImagePath+`${req.params.imageName}.jpg`)
    .resize(parseInt(req.params.imageHeight),parseInt(req.params.imageWidth)).toFormat('jpg')
    .toFile(resizedImagePath+`${req.params.imageName}${req.params.imageHeight}x${req.params.imageWidth}.jpg`)

      res.sendFile(resizedImagePath+`${req.params.imageName}${req.params.imageHeight}x${req.params.imageWidth}.jpg`)
    }
})


export default routes;

