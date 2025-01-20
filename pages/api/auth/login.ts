export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Simulação de validação (substitua pela lógica real)
      if (email === 'admin@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login bem-sucedido', token: 'fake-jwt-token' });
      } else {
        res.status(401).json({ message: 'Email ou senha incorretos' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  