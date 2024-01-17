export default function Item({ items,onHandleDelete ,onHandleToggle}) {
    return (
        <div>
            
            <br />
            <input type='checkbox' value={items.packed} onChange={()=>onHandleToggle(items.id)} />
            <i style={items.packed?{textDecoration:"line-through"}:{}}>{items.description}</i>
            <i> {items.count} </i>
            <button onClick={(e) => onHandleDelete(items.id)}> X</button>
            
        </div>
   )
}