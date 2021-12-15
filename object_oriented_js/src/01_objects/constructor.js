//constructor function

function Circle (radius) {

    console.log('this', this)
    this.radius = radius,
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle()
circle.draw()

const keys = Object.keys(circle)
console.log(keys)

if('radius' in circle)
    console.log('circle has radius')