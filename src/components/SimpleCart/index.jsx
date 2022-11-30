import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, ListItemButton, ListItemText, List, ListItem, IconButton, ListItemAvatar, Avatar, Collapse } from '@mui/material';
import { Container, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './SimpleCart.css';


const SimpleCart = () => {
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products).products;

    const handleClick = () => {
        setOpen(!open);
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'remove_product', payload: { product } });
        const updatedProduct = products.find(currProduct => currProduct._id === product._id);
        updatedProduct.inventory++;
        dispatch({ type: 'update_product', payload: updatedProduct });
    }

    return (
        <>
            <Container className='totalCart'>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                >
                    <ListItemButton onClick={handleClick}>
                        <ShoppingCartOutlinedIcon />
                        {cart.numberOfItems}
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                        {
                            cart.productList.map(product => (

                                <ListItem key={product._id}
                                    secondaryAction={
                                        <IconButton onClick={() => removeFromCart(product)} edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <CardMedia
                                        component="img"
                                        height="50"
                                        image={product.img}
                                        sx={{ objectFit: "contain" }}
                                    />
                                    <ListItemText
                                        primary={product.display}
                                        secondary={"Qty. " + product.amountInCart}
                                    />
                                </ListItem>
                            ))
                        }
                    </Collapse>
                </List>
            </Container>
        </>
    )
}

export default SimpleCart;