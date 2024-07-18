import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Features/>
      <Delivery/>
      <TopPicks/>
      <Meals/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
