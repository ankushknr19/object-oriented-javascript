// factory function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw from factory')
        }
    }
 }
 
 const circle = createCircle(5)
 circle.draw() 