import Delivery from "./components/Delivery";
import Features from "./components/Features";
import Meals from "./components/Meals";
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
    </div>
  );
}

export default App;
