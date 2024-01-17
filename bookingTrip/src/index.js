import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';




function Input() {
    let date = new Date();
    let [step, setStep] = useState(1);
    let [count, setCount] = useState(0);
    date.setDate(date.getDate() + count);

    function increaseDate(e) {
        setCount((s)=>s+step)

    }
   function decreaseDate(e) {
        setCount((s)=>s-step)
    }
//     function increaseStep(e) {
//         setStep((s)=>s+1)

//     }
//    function decreaseStep(e) {
//         setStep((s)=>s-1)
//     }
  
    function changeRange(e) {
        setStep(+e.target.value)
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <div>
                {/* <button onClick={()=>decreaseStep()}>-</button> */}
                
                <span> step:{step} </span>
                <input type="range" min="0" max="10" value={ step} onChange={(e) => changeRange(e)} />
                {/* <button onClick={() => increaseStep()}>+</button> */}
            </div>
            <br/>
            <div>
                <button onClick={()=>decreaseDate()}>-</button>
                <input type="text" value={count} onChange={(e) => {
                    setCount(+e.target.value)
                }} />
                
                <button onClick={() => increaseDate()}>+</button>

                <p>date :{date.toDateString()}</p>

                <button onClick={(e) => {
                    setCount(0);
                    setStep(1);
                }}>Reset</button>
            </div>
           
        </div>
    )
}

// function App() {
//     return (
//         <div>
//            <Input />
//         </div>
//     );
    
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App/>
   </React.StrictMode> 
);
