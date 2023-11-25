import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      {JSON.stringify(products)}
    </div>
  );
}

export default Product;
