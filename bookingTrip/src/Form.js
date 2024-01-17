import  { useState } from 'react';
export default function Form({ onHandleItem }) {
    const [description, setDescription] = useState("");
    const [count, setCount] = useState(1);

    function submitForm(e) {
        e.preventDefault();
        if (!description) return; 
        const newItem = { description, count, packed: false, id: Date.now() }
        onHandleItem(newItem);
        setCount(1)
        setDescription('')
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <span>What do you need for your trip</span>
                <select value={count} onChange={(e) => {setCount(+e.target.value)}}>
                    { Array.from({ length: 20 }, (v, i) => i + 1).map
                        ((index) => (
                            <option value={index} key={index}>
                                {index}
                            </option>
                    ))
                        }
                </select>
                <input type='text' value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }}
                />
                    <button>submit</button>
                </form> 
        </>
    )
}