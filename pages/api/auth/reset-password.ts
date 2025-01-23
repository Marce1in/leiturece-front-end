export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { password } = req.body;
      console.log(`Senha redefinida para: ${password}`);
      res.status(200).json({ message: 'Senha redefinida com sucesso' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  