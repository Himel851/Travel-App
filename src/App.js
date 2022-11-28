import { Button, Stack } from "react-bootstrap";
import "./App.css";
import Category from "./Components/Category/Category";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Selling from "./Components/Selling/Selling";
import Testimonial from "./Components/Testimonial/Testimonial";
import Trip from "./Components/Trip/Trip";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Category />
      <Selling />
      <Trip />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
