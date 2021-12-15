// constructor class
const User = function(email, name){
    this.email = email
    this.name = name

    this.login = function(){
        console.log(this.email, 'has logged in');

        return this
    },
    this.logout = function(){
        console.log(this.email, 'has logged out');

        return this
    }
} 
//encapsulation
// anything related to userOne is inside an object instead of multiple variables

const userOne = new User('ank.knr@gmail.com', 'Ankush')

console.log(userOne);

userOne.login().logout()  //method chaining