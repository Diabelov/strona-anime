import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const code = req.query.chuj;

  if (code === "pizda") {
    return res.send({
        success: false,
        data: {
            code: 400,
            message: "pizda"
        }
    })
  }

  res.send({
    success: true,
    data: {
        code: 200,
        message: "chuj1234"
    }
  });
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
