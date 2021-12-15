//grouping variables and functions with similar functionalities

const userOne = {
    email: 'one@gmail.com',
    name: 'one'

    login(){
        console.log(this.email, 'has logged in');
    }
    logout(){
        console.log(this.email, 'has logged out');
    }
} 
//encapsulation
// anything related to userOne is inside an object instead of multiple variables

console.log(userOne.name)
console.log(userOne.logout())


const userTwo = {
    email: 'two@gmail.com',
    name: 'two'

    login(){
        console.log(this.email, 'has logged in');
    }
    logout(){
        console.log(this.email, 'has logged out');
    }
} 
//encapsulation
// anything related to userTwo is inside an object instead of multiple variables

console.log(userTwo.name)
console.log(userTwo.logout())


const userThree = {
    email: 'three@gmail.com',
    name: 'three'

    login(){
        console.log(this.email, 'has logged in');
    }
    logout(){
        console.log(this.email, 'has logged out');
    }
} 
//encapsulation
// anything related to userThree is inside an object instead of multiple variables

console.log(userThree.name)
console.log(userThree.logout())