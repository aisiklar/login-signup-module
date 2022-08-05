const express = require('express');
const app = express();
const Datastore = require('nedb');

// to parse req.body
app.use(express.urlencoded())

/* app.get('/', (req, res) => {
    console.log('hello world'); 
}) */
const port = 3000;

app.listen(port, () => {
    console.log(`listening to ${port}`);
});

app.use('/', express.static('public'));

// create a database and load automatically
let db = new Datastore({ filename: './database/accounts.db', autoload: true });



let numberOfAccounts = 0;

// check the database for any previous entries
db.count({}, (err, count) => {
   console.log(`count: ${count}`);
   numberOfAccounts = count;
   console.log(`numberOfAccounts: ${numberOfAccounts}`);
})

db.find({ _id: '0' }, function (err, docs) {
  // If no document is found, docs is equal to []
  if (docs === []) {
   id = 0;
  } 
  else {
   id = numberOfAccounts;
  }
});


//console.log(`id: ${id}`);

app.post('/signin', (req, res, next) => {
   console.log(req.body);
   let input = req.body;
   let username = input.username;
   let password = input.password;
//   db.insert(input, function (err, newDoc) { 
   res.send(".....................")
   console.log(`username, password: ${username}, ${password}`);
});

// signing up for a new account
// endpoint for signup
app.post('/signup', (req, res, next) => {
   console.log('received post request');
   console.log(req.body);
   console.log(`id at the start of post service: ${id}`);
   let username = req.body.email;
   let name = req.body.name;
   let password = req.body.pword;

   // search whether the username (email) has been registered before
   db.find({ username: username }, (err, docs) => {
      if (docs = []) {
         console.log('first registry of the username');
      }
      else {
         for (element in req.body) {
            console.log(element, req.body[element]);
         }
         console.log('this username has already registered!!!')
      }
   })


   let register = {
      '_id': id,
       'name': name, 
       'username': username,
       'password': password
   };
   for (elements in register) {
      console.log(elements, register[elements]);
   }  

   db.insert(register, (err, newDoc) => { 
     console.log("register is saved to db...");
     console.log(`newDoc: ${newDoc}`);
   });

   res.send("you are registered!")
   console.log(`name, username, password: ${name}, ${username}, ${password}`);
   console.log(`id before incrementing: ${id}`);
   id++;   
   console.log(`id after incrementing: ${id}`);
});
