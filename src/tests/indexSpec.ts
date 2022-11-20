import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test the end point server', () => {
  it('get /image route , should return 404 for bad url ', async () => {
    const response = await request.get('/nonexistent');
    expect(response.statusCode).toEqual(404);
  });

  it('get /image/:imageName/:imageHeight/:imageWidth route ', async () => {
    const response = await request.get('/image/cat/200/500');
    expect(response.statusCode).toEqual(200);
  });

  it('get /image/:imageName route ', async () => {
    const response = await request.get('/image/cat');
    expect(response.statusCode).toEqual(200);
  });

  it('get /image/:imageName/:imageHeight/:imageWidth route , should return a warning text ', async () => {
    const response = await request.get('/image/nonexitent');
    expect(response.statusCode).toEqual(200);
  });
});
