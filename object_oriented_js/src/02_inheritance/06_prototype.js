// all objects have __proto__ property, contains methods
// prototype - to attach methods inside proto instead directly to object
    // so methods are not repeated for every instances

//constructor function
function User(email,name){
    this.email = email
    this.name = name 
    this.online = false 
    // this.logout = function(){
    //     console.log(this.email, 'has logged in');
    // }
 
}

User.prototype.login = function(){
    this.online = true
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.email, 'has logged out');
}

const userOne = new User('ank.knr@gmail.com', 'Ankush')
const userTwo = new User('snit@gmail.com', 'Sanit')

console.log(userOne)
userOne.login()
console.log(userOne)
console.log(userTwo)
userTwo.login()
console.log(userTwo)