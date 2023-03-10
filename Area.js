function Square() {
    let len = 4;
    let area = len * len;
    return area;
  }
  

  function Circle() {
    let radius = 2;
    let area = 3.14*radius*radius;
    return area;
  }
  
  
  
  function Rhombus() {
    let breadth = 5;
    let height = 3;
    let area = breadth * height;
    return area;
  }
 

  
  function Trapezoid() {
    let height = 4;
    let side1 = 7;
    let side2 = 5; 
    let area = ((side1 + side2) /2 )* height;
    return area;
  }
 
  function  Triangle() {
    let height = 6;
    let side = 2;
    let area = 0.5*height*side;



  }

  export  {Square,Circle,Rhombus,Trapezoid,Triangle};
