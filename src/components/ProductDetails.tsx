import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Adjust path as needed
import { Button, Typography, TextField } from '@mui/material';
import {products} from '../data/products'; // Adjust path as needed

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, isAuthenticated } = useAppContext(); // Assuming you have these in your context
  const product = products.find(p => p.id.toString() === productId); // Find the product by ID

  const [quantity, setQuantity] = React.useState(1);

  // Add to Cart Handler
  const handleAddToCart = (quantity: number) => {
    addToCart({ ...product, quantity });
  };

  if (!product) {
    return <div>404! Product with id {productId} not found</div>; // Or some other error handling
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
          
          {isAuthenticated && (
            <>
              <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} className="my-3" />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleAddToCart(quantity)} // Replace with actual quantity logic
              >
                Add to Cart
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
