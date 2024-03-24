import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Account from './components/Account'
import NavBars from './components/NavBars'

// button's purple-ish color: indigo-700
// Entire page's background color: gray-100

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="signup" element={<div><NavBars /><Account action="Sign up"/></div>} />
          <Route path="signin" element={<div><NavBars /><Account action="Sign in"/></div>} />
          <Route path="update-password" element={<div><NavBars /><Account action="Update password"/></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
