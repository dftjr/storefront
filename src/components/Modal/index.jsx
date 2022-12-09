import { connect } from 'react-redux';
import React from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function PriceModal() {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => (setOpen(false), setOpen2(false))

    return (
        <>

            <Button onClick={handleOpen}>Checkout</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Credit card form would go here.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Shipping form would go here.
                    </Typography>
                    <Button onClick={handleOpen2}>Submit Purchase</Button>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Thank you for your purchase!
                            </Typography>
                            <Button onClick={handleClose2}>Back to menu</Button>
                        </Box>
                    </Modal>
                </Box>
            </Modal>
        </>
    );
}

export default PriceModal;