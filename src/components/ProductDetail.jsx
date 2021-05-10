import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCartValue } from "../context/ProductContext";
import LoaderSpinner from "./LoaderSpinner";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [{ cart }, dispatch] = useCartValue();

  const fetchItem = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setItem(data);
  };

  // eslint-disable-next-line

  const addToCart = () => {
    //  add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        category: item.category,
      },
    });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className='productDetail'>
      <div className='productDetail__container'>
        <Link to='/dashboard' className='goback'>
          <IoChevronBackSharp />
        </Link>
        {Object.entries(item).length === 0 && <LoaderSpinner />}
        <div className='productDetail__content'>
          <div className='productDetail__img'></div>
          <div className='productDetail__img'>
            <img src={item.image} alt={item.title} />
          </div>
          <p className='productDetail__cat'>{item.category}</p>
          <h3 className='productDetail__title'>{item.title}</h3>
          <p className='productDetail__price'>${item.price}</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
