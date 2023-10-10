function myNewFun() {
  let names = ["Kamel", "Amin", "Alle", "Thabed"];
  return (
    <>
      <h2 className="text-center">NameGroup</h2>
      <ul className="list-group">
        {names.map((name) => (
          <li className="list-group-item list-group-item-primary">{name}</li>
        ))}
      </ul>
    </>
  );
}

export default myNewFun;
