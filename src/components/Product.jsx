import React from "react";
import { Link } from "react-router-dom";
import { useCartValue } from "../context/ProductContext";

function Product({ title, id, price, image, category }) {
  const [{ cart }, dispatch] = useCartValue();
  const addToCart = () => {
    //  add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        image,
        category,
      },
    });
  };

  // eslint-disable-next-line
  return (
    <div className='product'>
      <Link to={`/product/${id}`} className='product__img'>
        <img src={image} alt={title} />
      </Link>
      <p className='product__cat'>{category}</p>
      <h3 className='product__title'>{title}</h3>
      <p className='product__price'>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
