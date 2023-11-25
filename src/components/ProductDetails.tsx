import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Adjust path as needed
import { Button, Typography, TextField } from '@mui/material';
import {products} from '../data/products'; // Adjust path as needed

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useAppContext(); // Assuming you have these in your context
  const product = products.find(p => p.id.toString() === productId); // Find the product by ID

  // Add to Cart Handler
  const handleAddToCart = (quantity: number) => {
    addToCart({ ...product, quantity });
  };

  if (!product) {
    console.log('Product not found');
    console.log('Product ID being searched:', id);
    console.log('Products:', products);
    return <div>404! Product not found</div>; // Or some other error handling
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={`/assets/${product.imgFile}`} 
            alt={product.name}
            className="img-fluid" // Bootstrap class for responsive images
          />
        </div>
        <div className="col-md-6">
          <Typography variant="h3">{product.name}</Typography>
          <Typography variant="body1" className="my-3">{product.description}</Typography>
          <Typography variant="h6">Price: ${ (product.price / 100).toFixed(2) }</Typography>
          
          {/* Quantity Input */}
          <TextField label="Quantity" type="number" defaultValue={1} className="my-3" />

          {/* Add to Cart Button */}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => handleAddToCart(1)} // Replace with actual quantity logic
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
