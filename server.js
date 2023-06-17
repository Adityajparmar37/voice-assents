const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./index.ejs');
});

app.post('/text-to-speech', (req, res) => {
  const { text } = req.body;
  // Implement text-to-speech logic here
  // You can use any text-to-speech library or service

  // For example, using the `say` package (npm install say):
  const say = require('say');
  say.speak(text);

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
