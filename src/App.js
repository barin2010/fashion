import Arrivals from "./components/Arrivals/Arrivals";
import Brands from "./components/Brands/Brands";
import Download from "./components/Download/Download";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Payday from "./components/Payday/Payday";
import Promo from "./components/Promo/Promo";
import Shopping from "./components/Shopping/Shopping";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favorite />
      <Download />
      <Shopping />
      <Footer />
    </div>
  );
}

export default App;
