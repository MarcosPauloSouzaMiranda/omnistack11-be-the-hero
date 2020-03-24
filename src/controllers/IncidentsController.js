const connection = require('../database/connection')

module.exports = {
  async store(req, res) {
    
    const { title, description, value } = req.body;

    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title, 
      description,
      value,
      ong_id
    })

    return res.location(`/incidents/${id}`).status(201).json({id});
    
  },

  async index(req, res) {

    const incidents = await connection('incidents').select('*');

    return res.status(200).json(incidents);

  },

  async delete(req, res) {
    
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id)
      return res.status(401).json({ error: 'Sem permissão para apagar este incidente!' })

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();

  }
}