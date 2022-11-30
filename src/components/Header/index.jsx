import { Container, Typography, Grid } from '@mui/material'
import SimpleCart from '../SimpleCart';
import './Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h1">David's Storefront</Typography>
                </Grid>
                <SimpleCart/>
            </Container>
        </div>
    )
}

export default Header;