import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Categories />
                <Products />
                <Footer />
            </Provider>
        </>
    );
}

export default App;