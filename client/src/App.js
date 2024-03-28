import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBars from './components/NavBars';
import Account from './components/Account';
import ProductDetail from './components/ProdDetail';
import ProductForm from './components/ProdForm';


// button's purple-ish color: indigo-700
// Entire page's background color: gray-100

function App() {
  return (
    <Router>
      <div>
      <NavBars />
      <ProductForm />
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product-form/:productId?" element={<ProductForm />} />
          <Route path="*" render={() => <div>404 Not Found</div>} />
          {/* <Account action="Sign in"/> */}
          {/* <Account action="Sign up"/> */}
          {/* <Account action="Update password"/> */}
          {/* <Account action="Email sent"/> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
