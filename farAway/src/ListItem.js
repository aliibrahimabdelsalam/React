import Item from './Item';

export default function ListItem({ listOfItem, onHandleDelete, onHandleToggle, onHandleReset }) {
    return (
        <div className='main'>
            {
                listOfItem.map((item) => (
                    <Item items={item} onHandleDelete={onHandleDelete} onHandleToggle={onHandleToggle}  key={item.id}/>
            ))
            }
                    <button onClick={onHandleReset}>Reset</button>
        </div>
    );
}