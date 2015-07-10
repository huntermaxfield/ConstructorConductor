/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
users.push(tyler, cahlan, lenny);
console.log(users);

console.log('Tyler\'s information is ' + tyler.name + ',' + tyler.email + ', and' + tyler.pw + '.');
//Console.log all of Tylers information

  //code here

console.log('Tyler\'s information is ' + lenny.name + ',' + lenny.email + ', and' + lenny.pw + '.');
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
var me = new User('hunter', 'huntermax@hm.com', 'iLoveApple');
users.push(me);

//Now loop through your users Array and console.log every users name.

  //code here
var allNames = function(param1) {
    for(i in param1) {
        console.log(users[i].name)
    }
}

allNames(users);
