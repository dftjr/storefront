import { Container, Typography, Grid } from '@mui/material'
import './Footer.css';

function Footer() {
    return (
        <div className="footerContainer">
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="body4">2022 © David Tusia</Typography>
                </Grid>
            </Container>
            </div>
    )
}

export default Footer;