const crypto = require('crypto');

const connection = require('../database/connection')

module.exports = {
  async store(req, res) {

    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
  
    return res.location(`/ongs/${id}`).json({id}).status(201);

  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    res.json(ongs).status(200)
  }
}