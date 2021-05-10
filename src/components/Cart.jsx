import React from "react";
import { Link } from "react-router-dom";
import { useCartValue } from "../context/ProductContext";
import { motion } from "framer-motion";
function Cart() {
  const [{ cart }] = useCartValue();

  return (
    <motion.div
      animate={{ y: -40 }}
      transition={{ ease: "easeOut" }}
      exit={{ y: 0 }}
      className='card'
    >
      <div className='cart__container'>
        <div className='cart__content'>
          {cart.map((item) => (
            <div className='product'>
              <Link to={`/product/${item.id}`} className='product__img'>
                <img src={item.image} alt={item.title} />
              </Link>
              <p className='product__cat'>{item.category}</p>
              <h3 className='product__title'>{item.title}</h3>
              <p className='product__price'>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
