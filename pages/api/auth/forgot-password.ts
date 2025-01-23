export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { email } = req.body;
      console.log(`Solicitação de redefinição para: ${email}`);
      res.status(200).json({ message: 'Email enviado' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  