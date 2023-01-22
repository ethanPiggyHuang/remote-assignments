const express = require('express');
const bodyParser = require('body-parser');        
const cookieParser = require('cookie-parser');      

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/getData', (req, res) => {
  const numberString = req.query.number;
  const number = Number(numberString);
  let sum = 0;
  let message = '';
  if (!numberString){
    message = 'Lack of Parameter';
  } else if (isNaN(number)){
    message = 'Wrong Parameter';
  } else {
    for(let i=1; i<=number ; i++){
      sum += i;
    }
  }
  res.render('getData', { number, sum, message});
});

app.get('/myName', (req, res) => {
  const { name } = req.cookies;
  if (name){
    res.render('myName', { name });
  } else {
    res.redirect('/trackName');
  }
})

app.get('/trackName', (req, res) => {
  let name='';
  if (req.query.name)       //input name by route query
  {
    name = req.query.name;
    res.cookie('name', req.query.name);
    res.redirect('/myName');
  } else if (req.cookies.name)   //check if there is cookie for name
  {
    name = req.cookies.name;
    res.redirect('/myName');
  } else {
    res.render('trackName');
  }
});

app.post('/trackName', (req, res) => {
  res.cookie('name', req.body.name);   //input name by cookie
  res.redirect('/myName');
});

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000');
});