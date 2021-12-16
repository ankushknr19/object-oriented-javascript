class User {
    constructor(email, name){
        this.email = email
        this.name = name
    }
    login(){
        console.log(this.email, 'just logged in')
        return this
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this
    }
}

class Admin extends User {
    // super.login()
    login(){
        console.log(`admin ${this.email} logged in successfully. Welcome admin ${this.name} !`)
    }
}


const userOne = new User('ank.knr@gmail.com', 'Ankush')
const userTwo = new User('anq.qnr@gmail.com', 'Nqush')
const admin = new Admin('snit@gmail.com', 'Sanit')

console.log(admin.login())