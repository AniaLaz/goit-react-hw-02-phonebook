import { nanoid } from 'nanoid';
const Contacts = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id} id={item.id}>
            <div>
              <p> {item.name}:</p>
              <p> {item.number}</p>
            </div>

            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
