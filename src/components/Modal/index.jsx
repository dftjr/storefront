// import { connect } from 'react-redux';
// import React from 'react';
// import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material'

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// function PriceModal(props) {

//     const displayList = props.categories.active === 'all' ? props.products :
//         props.products.filter(product => product.category === props.categories.active);
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <>

//             <Button size="small" onClick={handleOpen}>VIEW DETAILS</Button>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 {
//                     displayList.map(product => (
//                         <Fade in={open}>
//                             <Box sx={style}>
//                                 <Typography id="transition-modal-title" variant="h6" component="h2">
//                                     {console.log(product)}
//                                     {console.log(product.id)}
//                                 </Typography>
//                                 <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//                                     Stock here
//                                 </Typography>
//                             </Box>
//                         </Fade>
//                     ))
//                 }
//             </Modal>
//         </>
//     );
// }

// const mapStateToProps = (state) => ({
//     products: state.products.products,
// });

// export default connect(mapStateToProps)(PriceModal);