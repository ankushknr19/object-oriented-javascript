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
    deleteUser(user){
        users = users.filter( u => {
            return u.email != user.email
        })
    }
}


const userOne = new User('ank.knr@gmail.com', 'Ankush')
const userTwo = new User('anq.qnr@gmail.com', 'Nqush')
const admin = new Admin('snit@gmail.com', 'Sanit')

var users = [userOne, userTwo, admin]

console.log(users)

admin.deleteUser(userTwo)

console.log(users)