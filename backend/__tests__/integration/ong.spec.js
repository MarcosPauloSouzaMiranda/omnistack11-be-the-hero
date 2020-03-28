const connection = require('../../src/database/connection');
const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able create a new ONG', async () => {

    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "37999246628",
      city: "Rio do Sul",
      uf: "SC"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
});