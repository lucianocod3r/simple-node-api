const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World!<br><p>este é um teste de CI (continuous Integration) using github and a heroku app</p><br><br><br><p>Luciano.Cod3r © 2022</p>');
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app
