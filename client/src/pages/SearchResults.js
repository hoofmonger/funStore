import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SearchBar from '../components/SearchBar';
import { QUERY_PRODUCTS } from '../utils/queries';
import Product from '../components/Product'

export const SearchResults = ()=> {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
    return (
        <main>
            <div className="my-2">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {products.map((product) => (
            <Product
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>No products by that name. Sorry!</h3>
      )}
    </div>
        </main>
    )
} 