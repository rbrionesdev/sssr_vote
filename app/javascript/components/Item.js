import React from "react";
const Item = (props) => {
  // remember the {...item} in our Items component we can now grab these from props.
  const { name, description, id, likes, deleteItem } = props;

  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>
        {id}- {name}
      </h1>
      <p>likes: {likes}</p>
      <p>{description}</p>
      <button onClick={() => deleteItem(id)}>delete me</button>
    </div>
  );
};
export default Item;