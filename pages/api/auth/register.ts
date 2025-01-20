export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
  
      // Simulação de validação
      if (email === 'existing@example.com') {
        res.status(400).json({ message: 'Ops! Esse E-mail já existe' });
      } else {
        console.log(`Novo usuário registrado: ${name}, ${email}`);
        res.status(200).json({ message: 'Registro bem-sucedido!' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  