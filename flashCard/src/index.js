import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

let questions = [
    {
        id:1,
        question: "what is your name",
        answer:"ali ibrahim"
    }
    ,
    {
        id:2,
        question: "what are you wish",
        answer:"i wish i be rich"
    },
    {
        id:3,
        question: "how old are you",
        answer:26
    }
   
    
]
function Card() {
    let [select, setSelect] = useState(null);
    function handleQuest(id){
        setSelect(id);
    }
    return (
        <>
            <div>
        {
            questions.map((q) => (
                <div key={q.id} style={{ width: "200px", height: "200px", border: "1px solid black", marginBottom: "10px" }} onClick={()=>handleQuest(q.id)}>
                 {select===q.id? q.answer   :q.question}
                </div>
            ))
        }
            </div>
    </>
    );
}

   function App() {
    
    return (
        <div style={{textAlign:"center"}}>
             <Card />
        
        </div>
    );
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App/>
   </React.StrictMode> 
);
