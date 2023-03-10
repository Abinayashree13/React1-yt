import React from 'react';
import  ReactComponent from 'react';
import{Square,  Circle, Rhombus, Trapezoid, Triangle} from './Area';
class Square1 extends ReactComponent {
    render() {
        return (
            <div>
                <h1>Area of square</h1>
                <Square />
            </div>
        );
            
    }
}


class Circle1 extends ReactComponent {
    render() {
        return (
            <div>
                <h1>Area of circle</h1>
                <Circle />
            </div>
        );
            
    }
}  


class Rhombus1 extends ReactComponent {
    render() {
        return (
            <div>
                <h1>Area of rhombus</h1>
                <Rhombus />
            </div>
        );
            
    }
}

class Trapezoid1 extends ReactComponent {
    render() {
        return (
            <div>
                <h1>Area of trapezoid</h1>
                <Trapezoid />
            </div>
        );
            
    }
}  

class Triangle1 extends ReactComponent {
    render() {
        return (
            <div>
                <h1>Area of triangle</h1>
                <Triangle />
            </div>
        );
            
    }
}  

export  {Square,Circle,Rhombus,Trapezoid,Triangle};