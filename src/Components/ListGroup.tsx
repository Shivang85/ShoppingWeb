import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Tokyo", "London", "Delhi", "Kanpur"];
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h2 className="text-center">ListGroup</h2>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item list-group-item-primary" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
