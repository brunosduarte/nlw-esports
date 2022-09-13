import express from  'express';

const app = express();

app.get('/ads', () => {
  console.log('acessou ads')
})