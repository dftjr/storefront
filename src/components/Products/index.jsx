import { connect } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, Grid, CardActionArea, Container } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import PriceModal from '../Modal'

function Products(props) {

    const displayList = props.categories.active === 'all' ? props.products :
        props.products.filter(product => product.category === props.categories.active);

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
                        <Card sx={{ maxWidth: 400 }} key={product.id}>
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
                                <Button size="small"><AddShoppingCartIcon />ADD TO CART</Button>
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

const mapStateToProps = (state) => ({
    categories: state.categories,
    products: state.products.products,
});

export default connect(mapStateToProps)(Products);