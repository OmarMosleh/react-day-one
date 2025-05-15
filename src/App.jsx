import React, { useState } from "react";
import NavBar from "./components/NavBar";
import User from "./components/User";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "laptop", price: 20000, inStock: true },
    { id: 2, name: "iphone", price: 40000, inStock: false },
    { id: 3, name: "Tv", price: 70000, inStock: true },
  ]);


  const toggleStock = (wantedId) =>{
    setProducts((prevProducts)=> 
      prevProducts.map((product)=>
      product.id === wantedId ? {...product, inStock: !product.inStock} : product
      )
    )
  }

  return (
    <>
      <h2>My products</h2>
      <ul>
        {products.map((product) => (
          <section style={{ marginBottom: "2rem" }} key={product.id}>
            <li>
              <h1>{product.name}</h1>
              <button type="button" onClick={()=>toggleStock(product.id)}>
                {product.inStock ? <h3 style={{color:"red"}}> Mark out of Stock </h3> : <h3 style={{color:"green"}}> mark In Stock</h3>}
              </button>
              <h2>${product.price}</h2>
              {!product.inStock && product.price === 70000 &&(
                  <span style={{color:"red"}}>SOLD OUT</span>
                )
              }
            </li>
          </section>
        ))}
      </ul>
    </>
  );
}

export default App;
