// pages/api/users.js
import { connectToDatabase } from '../../lib/db';
import cadastroUsuarios from '../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const cadastroUsuarios = await cadastroUsuarios.create(req.body);
        res.status(201).json({ success: true, data: cadastroUsuarios });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Método não permitido' });
      break;
  }
}
