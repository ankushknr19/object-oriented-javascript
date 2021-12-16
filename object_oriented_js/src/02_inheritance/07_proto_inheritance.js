//constructor function
function User(email,name){
    this.email = email
    this.name = name
    this.online = false
}

User.prototype.login = function(){
    this.online = true
    console.log(this.name, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.name, 'has logged out');
}

//inheritance from User
function Admin(...args){
    User.apply(this, args)
    this.role = 'super admin'
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(user){
    users = users.filter(u=>{
        return u.email != user.email
    })
}

const userOne = new User('ank@gmail.com', 'Ankush')
const userTwo = new User('snit@gmail.com', 'Sanit')
const admin = new Admin('admin@gmail.com', 'admin')


var users = [userOne,userTwo,admin]
console.log(admin)