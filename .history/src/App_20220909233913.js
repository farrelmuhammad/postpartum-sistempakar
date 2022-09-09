import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import RouteApp from './routes';
import { useSelector } from 'react-redux';
import Login from './pages/Login';

function App() {
  const isLoggedIn = !!useSelector(state => state.auth.token);

  return (
    <>
      {isLoggedIn ? (
        <RouteApp />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
