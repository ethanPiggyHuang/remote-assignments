const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/getData', (req, res) => {
  const numberString = req.query.number;
  const number = parseInt(numberString);
  let sum = 0;
  let message = '';
  if (!numberString){
    message = 'Lack of Parameter';
  } else if (isNaN(number)){
    message = 'Wrong Parameter';
  } else {
    for(let i=1; i<=parseInt(number) ; i++){
      sum += i;
    }
  }
  res.render('getData', { number, sum, message});
});


app.listen(3000, () => {
  console.log('The application is running on localhost: 3000');
});