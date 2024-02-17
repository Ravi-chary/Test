import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} ravi={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
