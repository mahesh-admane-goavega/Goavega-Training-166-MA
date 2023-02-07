import logo from "./logo.svg";
import "./App.css";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./mr-whiskerson.png"
        name="Satish"
        phone="33737189"
        mail="satish@gmail.com"
      />
      <Contact
        img="./fluffykins.png"
        name="Fluffykins"
        phone="272297189"
        mail="fluff@gmail.com"
      />
      <Contact
        img="./felix.png"
        name="Akash"
        phone="352628829"
        mail="akash@gmail.com"
      />
      <Contact
        img="./pumpkin.png"
        name="Mayur"
        phone="2733920273"
        mail="mayur@gmail.com"
      />
    </div>
  );
}

export default App;
