import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, Grid, CardActionArea, Container } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import PriceModal from '../Modal'

function Products() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products).products;
    const categories = useSelector(state => state.categories);

    const displayList = categories.active === 'all' ? products :
    products.filter(product => product.category === categories.active);

 

  const addToCart = (product) => {
    if (product.inventory >= 1) {
      dispatch({ type: 'add_product', payload: { product } });
      const updatedProduct = products.find(currProduct => currProduct._id === product._id);
      updatedProduct.inventory--;
      dispatch({type: 'update_product', payload: updatedProduct});
    } else {
      alert('out of stock');
    }
  }

    return (
        <>
        <Container className="productsContainer">
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                {
                    displayList.map(product => (
                        <Card sx={{ maxWidth: 400 }} key={product._id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt={product.normalized}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">{product.display}</Typography>
                                    <Typography variant="body4">{product.description}</Typography>
                                </CardContent>
                                <List>
                                    <ListItem >Price: ${product.price}</ListItem>
                                    <ListItem >In Stock: {product.inventory}</ListItem>
                                </List>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" onClick={() => addToCart(product)}><AddShoppingCartIcon />ADD TO CART</Button>
                                <Button size="small">VIEW DETAILS</Button>
                                {/* <PriceModal/> */}
                            </CardActions>

                        </Card>
                    ))
                }
            </Grid>
            </Container>
        </>
    );
}

export default Products;