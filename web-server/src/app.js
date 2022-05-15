const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>');
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
