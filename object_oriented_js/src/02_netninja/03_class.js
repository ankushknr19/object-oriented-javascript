class User {
    constructor(email, name){
        this.email = email
        this.name = name
    }
    login(){
        console.log(this.email, 'just logged in')
    }
    logout(){
        console.log(this.email, 'just logged out')
    }
}

const userOne = new User('ank.knr@gmail.com', 'Ankush')
const userTwo = new User('anq.qnr@gmail.com', 'Nqush')

userOne.login()
userTwo.logout()

console.log(userOne)
console.log(userTwo)