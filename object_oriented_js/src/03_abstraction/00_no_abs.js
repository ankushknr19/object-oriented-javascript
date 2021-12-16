//constructor function
function Calculator(num1,num2){
    this.num1 = num1
    this.num2 = num2

    this.add = function(){
        return this.num1 + this.num2
    }

    this.subtract = function(){
        return this.num1 - this.num2
    }

    this.showAdd = function(){
        const result = this.add()
        console.log('the sum is',result)
    }

    this.showSubtract = function(){
        const result = this.subtract()
        console.log('the subtract is',result)
    }
}

const calc = new Calculator(5,2)
calc.showAdd()
calc.showSubtract()