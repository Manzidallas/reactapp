export default function ListGroup() {
const items = [
    'Dallas',
    'Gang',
    'Programming',
    'Users'
];

  return (
    <>
        <h1>List Group:</h1>
       {items.length === 0 ? (<p>Empty<p/>) : null}
        <ul className="list-group">
        {items.map((item) => (<li className="list-group-item"> {item}</li>))}
        </ul>
    </>
  );
}
