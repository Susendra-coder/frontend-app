import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css";

const API_URL = import.meta.env.VITE_API_URL;

function Content() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/store`);

      // Ensure products is always an array
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else if (Array.isArray(res.data.products)) {
        setProducts(res.data.products);
      } else {
        console.error("Unexpected API response:", res.data);
        setProducts([]);
      }

    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <div className="row">
        {products.length === 0 ? (
          <h2>No products available</h2>
        ) : (
          products.map((product) => (
            <div className="box" key={product._id || product.id}>
              <img
                src={`${API_URL}/${product.imageUrl}`}
                width="300"
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Content;