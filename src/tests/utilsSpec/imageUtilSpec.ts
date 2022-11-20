import resize from '../../utilties/imageUtil';
import fs from 'fs';
import path from 'path';

const resizedImagePath: string = path.join(__dirname, `../../assets/resized/`);

describe('resize image tests', () => {
  it('image resizing test ',  () => {
    expect(resize('cat', '200', '200')).toBeInstanceOf(Promise);
    expect(fs.existsSync(resizedImagePath +
        `cat200x200.jpg` )).toBeTruthy;
  });
});