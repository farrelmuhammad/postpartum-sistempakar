import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import RouteApp from './routes';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const isLoggedIn = !!useSelector(state => state.auth.token);
  const { isLoggedIn } = useSelector((state) => state.auth);

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
