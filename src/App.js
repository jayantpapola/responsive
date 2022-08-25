import './App.css';
import Banner from './Components/Banner/Banner';
import Connection from './Components/Connections/Connection';
import FeaturedWork from './Components/FeaturedWork/FeaturedWork';
import Header from './Components/Header/Header';
import Service from './Components/Services/Service';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Service/>
      <Connection/>
      <FeaturedWork/>
    </div>
  );
}

export default App;
