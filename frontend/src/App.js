import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Account from './components/Account'
import NavBars from './components/NavBars'
import ProductDetail from './components/ProdDetail';
import ProductForm from './components/ProdForm';
import ProdList from './components/ProdList';
import Test from './components/Test';

// button's purple-ish color: indigo-700

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBars />}>
          <Route path="signup" element={<Account action="Sign up"/>} />
          <Route path="signin" element={<Account action="Sign in"/>} />
          <Route path="update-password" element={<Account action="Update password"/>} />
          <Route path="email-sent" element={<Account action="Email sent"/>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product-form/:productId?" element={<ProductForm />} />
          <Route path="/product-list" element={<ProdList />} />
          <Route path="testing" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
