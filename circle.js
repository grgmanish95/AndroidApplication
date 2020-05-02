const circle ={
    //shortcut method using arrow funtion
    
        /*area: radius => Math.PI * radius * radius,
        perimeter: radius => 2* Math.PI * radius*/
    
    
        area: function (radius)
        {
            return 3.14*radius*radius;
      },
        perimeter:function (radius){
            return 2*3.14*radius;
        }
    }
    console.log(circle.area(4));
    console.log(circle.perimeter(4));
    
    //to export this file or module
    module.exports = circle;
    //to export area or perimeter only
   // exports.perimeter = (radius) => 2* Math.PI* radius;
   // exports.area = (radius) => Math.PI* radius * radius;