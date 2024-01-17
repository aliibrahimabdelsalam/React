export default function Footer({items}) {
    return (
        <footer style={{
            position: "relative", bottom: "-300px"}}>
            <p>you have {items.length} on your list and number of packed {items.filter(item=> item.packed===true).length } </p>
        </footer>
    )
}