import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import RouteApp from './routes';


function App() {
  return (
    <>
      <div class="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <RouteApp />
    </>
  );
}

export default App;
