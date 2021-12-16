// nothing is centralized 

//create user one
const oneEmail = 'one.@gmail.com'
const oneName = 'one'

//create user two
const twoEmail = 'two.@gmail.com'
const twoName = 'two'

//create user three
const threeEmail = 'three.@gmail.com'
const threeName = 'three'

function login(email) {
    console.log(email, 'is now online');
}

function logout(email) {
    console.log(email, 'has logged out');
}

login(oneEmail)
logout(oneEmail)


