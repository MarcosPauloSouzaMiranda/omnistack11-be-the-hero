const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .first();

    if (!ong)
      return res.status(403).json({ error: 'Ong não encontrada para este id!' });

    return res.status(200).json(ong);

  }
}