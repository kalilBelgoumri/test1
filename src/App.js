import "./css/app.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <Home />
        <Alert />
        <Footer />
      </>
    </div>
  );
}

export default App;
