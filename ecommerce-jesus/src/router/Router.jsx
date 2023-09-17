import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { CartProvider } from '../context/CartContext';

export default function Router() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/order" element={<Checkout />}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}