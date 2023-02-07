import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  const card = data.map((mydata) => {
    return (
      <Card
        img={mydata.coverImg}
        rating={mydata.stats.rating}
        reviewCount={mydata.stats.reviewCount}
        country={mydata.location}
        title={mydata.title}
        price={mydata.price}
        openSpots={mydata.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Body />
      <section className="cards-list">{card}</section>
    </div>
  );
}
