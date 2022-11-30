import { Typography, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList, } from '@mui/lab'
import store from './../../store';
import { connect } from 'react-redux';

function Categories(props) {

  const handleChange = (e, newValue) => {
    store.dispatch({type: newValue});
  }

  return (
    <Container>
      <Typography variant="h4">Browse our Categories</Typography>
      <TabContext value={props.categories.active}>
        <Box sx={{ border: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              props.categories.categories.map(category => {
                return <Tab label={category.display} value={category.normalized} key={category.normalized}/>
              })
            }
          </TabList>
        </Box>
      </TabContext>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Categories);