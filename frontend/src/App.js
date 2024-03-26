import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Account from './components/Account'
import NavBars from './components/NavBars'

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
          <Route path="testing" element={<div><p>Hello World</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
