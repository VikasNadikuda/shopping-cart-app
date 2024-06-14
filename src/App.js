import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;
