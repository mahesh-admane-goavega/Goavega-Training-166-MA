import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import data from "./data";

function App() {
  const allData = data.map((item) => {
    return (
      <Hero
        src={item.imageUrl}
        location={item.location}
        title={item.title}
        desc={item.description}
        startDate={item.startDate}
        endDate={item.endDate}
        url={item.googleMapsUrl}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      {allData}
    </div>
  );
}

export default App;
