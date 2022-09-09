import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import RouteApp from './routes';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = !!useSelector(state => state.auth.token);

  return (
    <>
      <RouteApp />
    </>
  );
}

export default App;
