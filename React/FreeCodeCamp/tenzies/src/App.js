import React from "react";
import "./App.css";
import Dies from "./Dies";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dies, setDies] = React.useState(allNewDies());
  const [tenz, setTenz] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dies.every((die) => die.isHeld);
    const firstValue = dies[1].value;
    const allValue = dies.every((die) => die.value === firstValue);

    if (allHeld && allValue) {
      setTenz(true);
      console.log("Changed");
    }
  }, [dies]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDies() {
    const newDies = [];
    for (let i = 0; i < 10; i++) {
      newDies.push(generateNewDie());
    }
    console.log(newDies);
    return newDies;
  }

  function rollDies() {
    if (!tenz) {
      setDies((oldDies) =>
        oldDies.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenz(false);
      setDies(allNewDies());
    }
  }

  function holdDice(id) {
    setDies((oldDies) =>
      oldDies.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diesEle = dies.map((die) => (
    <Dies
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenz && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dies-box">{diesEle}</div>
      <button onClick={rollDies} className="btn">
        {tenz ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
