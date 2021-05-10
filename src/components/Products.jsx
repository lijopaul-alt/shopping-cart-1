import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Loader from "../components/LoaderSpinner";

function Products() {
  const [products, setProducts] = useState([]);

  // Fetching data from fakeStore API
  const fetchProucts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProucts();
  }, []);
  return (
    <div className='products'>
      <div className='products__container'>
        {products.length === 0 && <Loader />}
        {products.map((prod) => (
          <Product
            key={prod.id}
            category={prod.category}
            image={prod.image}
            price={prod.price}
            title={prod.title}
            id={prod.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
