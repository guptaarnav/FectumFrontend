import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { products } from '../data/products'; // Adjust the path as needed
import { Link as RouterLink } from 'react-router-dom';

const ProductList: React.FC = () => {
console.log('Image File:', products[0].imgFile);

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
    {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <RouterLink to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ maxWidth: 345, margin: 'auto' }}>
                <CardActionArea>
                <div 
                    style={{
                        height: '140px', // Make sure to use 'px' units
                        backgroundImage: `url(/assets/${product.imgFile})`,
                        backgroundSize: 'contain', // Maintain aspect ratio
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '10px 10px 0 0',
                        overflow: 'hidden',
                    }} 
                />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                    <Typography variant="h6" component="p" style={{ marginTop: '10px' }}>
                        ${ (product.price / 100).toFixed(2) }
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </RouterLink>
        </Grid>
    ))}

    </Grid>
  );
};

export default ProductList;
