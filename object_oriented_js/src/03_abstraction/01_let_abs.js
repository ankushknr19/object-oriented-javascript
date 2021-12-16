//constructor function
function Calculator(num1,num2){
    this.num1 = num1
    this.num2 = num2


    //local variables. Scope is limited to this Calculator function.
    //these are not private members of the calc object. They are local variable of Calculator function
    let add = function(){
        return num1 + num2
    }

    let subtract = function(){
        return num1 - num2
    }

    this.showAdd = function(){
        const result = add()
        console.log('the sum is',result)
    }

    this.showSubtract = function(){
        const result = subtract()
        console.log('the subtract is',result)
    }
}

const calc = new Calculator(5,2)
calc.showAdd()
calc.showSubtract()