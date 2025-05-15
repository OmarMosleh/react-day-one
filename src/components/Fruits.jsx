import React from "react";
import { useState } from "react";
const Fruits = () => {
  const [myFruits, setMyFruits] = useState([
    { id: 1, name: "apple", price: 50 },
    { id: 2, name: "banana", price: 30 },
    { id: 3, name: "mango", price: 70 },
  ]);

  const updatePrice = (idToUpdate, newPrice) => {
    setMyFruits((prevFruits) =>
      prevFruits.map((item) =>
        item.id === idToUpdate ? { ...item, price: newPrice } : item
      )
    );
  };

  const handleDelete = (idToDelete) => {
    setMyFruits((prevItems) =>
      prevItems.filter((item) => item.id !== idToDelete)
    );
  };

  const handlePriceIncrease = (idToIncrease) =>{
    // your logic to increase price
    console.log("your Logic")
  }

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>my Fruits are : </h1>
      {myFruits.map((item) => (
        <React.Fragment key={item.id}>
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
          <button type="button" onClick={() => updatePrice(item.id, 100)}>
            Update Price
          </button>
          <button type="button" onClick={() => handlePriceIncrease(item.id)}>
            increase Price by 10
          </button>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete Item
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Fruits;
