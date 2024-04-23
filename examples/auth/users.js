const hash = require('pbkdf2-password')();
const bcrypt = require("bcrypt");

var mockUsers = [
    { id: 1, username: "test", password: "test123" },
    { id: 2, username: "another",  password: "another123" },
    { id: 3, username: "admin",  password: "admin123" },
    { id: 4, username: "tina",  password: "hello12443" },
    { id: 5, username: "jason", password: "hello133" },
    { id: 6, username: "henry",  password: "hello113" },
    { id: 7, username: "marilyn",  password: "hellhel23" },
];

// function hashPasswords() {
//     return new Promise (resolve => { 
//     for (var i =0; i < mockUsers.length; i++){
//       //use an IIFE to create a new scope to capture the value of 'i'
//       (function(index) {
//         console.log("Index ", index)
//         hash({password: mockUsers[index].password}, function(err, password, salt, hash){
//           console.log("Password ", password)
//           if (err){
//             console.error("Error hashing password: ", err)
//             return;
//           }
//           mockUsers[index].salt = salt
//           mockUsers[index].hash = hash
//         });
//       })(i)
//     }

//     while(mockUsers.every(user => Object.keys(user).length === 4)){
      
//     }

//   })

// }

function addHashAndSalt() {
  var saltRounds = 10
  for (let user of mockUsers){
    user.salt = bcrypt.genSaltSync(saltRounds);
    user.hash = bcrypt.hashSync(user.password, user.salt);
  }
}

function getUser(){
  addHashAndSalt()
  return mockUsers
}

const comparePassword = (plain, hashed) =>
  bcrypt.compareSync(plain, hashed);

module.exports = {getUser, comparePassword}



