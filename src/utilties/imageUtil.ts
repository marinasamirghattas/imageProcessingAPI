import path from "path";
import sharp from "sharp";

const baseImagePath: string = path.join(__dirname, `../../assets/fullsize/`);
const resizedImagePath: string = path.join(__dirname, `../../assets/resized/`);



export default async function resize(name :string, height:string, width:string): Promise<void> {
  
    await sharp(baseImagePath + name + '.jpg')
        .resize(
            parseInt(height),
            parseInt(width)
        )
        .toFormat('jpg')
        .toFile(
            resizedImagePath +
            `${name}${height}x${width}.jpg`
        );

}
