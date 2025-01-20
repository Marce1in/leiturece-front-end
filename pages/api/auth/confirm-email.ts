export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { code } = req.body;
  
      // Simulação de código válido
      if (code === '123456') {
        res.status(200).json({ message: 'E-mail confirmado!' });
      } else {
        res.status(400).json({ message: 'Código inválido' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  