import React, { createContext, useReducer, useContext } from "react";

const ProductContext = createContext();

export default function ProductProvider({ reducer, init, children }) {
  return (
    <ProductContext.Provider value={useReducer(reducer, init)}>
      {children}
    </ProductContext.Provider>
  );
}

export const useCartValue = () => useContext(ProductContext);
