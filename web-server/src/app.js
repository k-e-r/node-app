const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
    },
    {
      name: 'Sarah',
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'rain',
    location: 'New York',
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
