import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className="container-xxl mx-auto p-0  position-relative header-2-1">
        <Navbar />
      </div>
      <Home />
    </>
  );
}

export default App;
