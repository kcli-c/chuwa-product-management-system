import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBars from './components/NavBars';
import Account from './components/Account'

function App() {
  return (
    <div>
      <NavBars />
      <Account action="Sign in"/>
      {/* <Account action="Sign up"/> */}
      {/* <Account action="Update password"/> */}
      {/* <Account action="Email sent"/> */}
    </div>
  );
}

export default App;
