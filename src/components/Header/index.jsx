import { Container, Typography, Grid } from '@mui/material'
import './Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <Container className="headerContainer">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h1">David's Storefront</Typography>
                </Grid>
            </Container>
        </div>
    )
}

export default Header;