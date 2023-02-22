import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CaptionCarousel from './pages/carasoul'
import AllRoute from './components/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
    </div>
  );
}

export default App;
