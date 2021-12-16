// classses are thin layer of abstraction built on top of js prototype model

class User {
    constructor(email, name){
        this.email = email
        this.name = name
        this.online = false
    }
    login(){
        this.online = true
        console.log(this.email, 'just logged in')
    }
    logout(){
        this.online = false
        console.log(this.email, 'just logged out')
    }
}

const userOne = new User('ank.knr@gmail.com', 'Ankush')
const userTwo = new User('snit@gmail.com', 'Sanit')

console.log(userOne)
userOne.login()
console.log(userOne)
console.log(userTwo)
userTwo.login()
console.log(userTwo)
userTwo.logout()
console.log(userTwo)
