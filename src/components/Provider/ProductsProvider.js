import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

const reducer=(state,action)=>{}

const ProductsProvider = ({children}) => {
    const [products,dispatch]= useReducer(reducer, productsData);

    return ( 
        <ProductsContext.Provider value={products}>
            <ProductsContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;

export const useProducts= ()=> useContext(ProductsContext);
export const useProductsActions= ()=> useContext(ProductsContextDispatcher)