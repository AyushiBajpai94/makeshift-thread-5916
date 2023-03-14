import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import AllRoute from './components/AllRoutes';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
