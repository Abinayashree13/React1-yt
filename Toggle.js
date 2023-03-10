import React, { useState} from 'react'; 
export default function Toggle () {
    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState("on");
    const handleToggle =()=> 
    {
        if(toggle == "on")
        {
            setToggle("off");
            alert("you toggled"+toggle)
        }
        else{
            setToggle("on");
            alert("you toggled"+toggle)
        }
    }
return(
    <div>
    <button onClick={()=>{setCount(count+1)}}>counter:{count}
    </button>    
    <br></br>
    <button onClick={handleToggle}>Toggle</button>
    </div>
)
    }
