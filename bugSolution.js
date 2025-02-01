const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error'); // Send a proper error response
  });
});

async function someAsyncOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
}