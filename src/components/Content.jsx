import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css"

 const API_URL="https://backend-app-z2t4.onrender.com/store"

function Content() {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const fetchProducts = async () => {
    const url = "https://backend-app-z2t4.onrender.com/store";
    const res = await axios.get(url);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
     
      {/* <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <hr /> */}
      <div className="row">
        {products.map((product) => (
          <div className="box">
            <img src={`https://backend-app-z2t4.onrender.com/${product.imageUrl}`} width="300px" alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;