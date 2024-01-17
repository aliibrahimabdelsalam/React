import  { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem';
import Footer from './Footer';

import './style.css'
export default function App() {
    const [items, setItems] = useState([]);

    function handleItem(item) {
        setItems((items) => [...items, item])
    }
    function deleteItem(id) {
        setItems(items => items.filter((item) => item.id !== id));
    }
    function toggleItem(id) {
        setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
    }
    function handleReset() {
        const confirmDelete = window.confirm("You sure to delete all items?");
        if (confirmDelete)
            setItems(items => []);
    }
    return (
        <>
            <Form onHandleItem={handleItem} />
            <ListItem listOfItem={items} onHandleReset={handleReset} onHandleDelete={deleteItem} onHandleToggle={toggleItem} />
            <Footer items={items} />
        </>
    )
}