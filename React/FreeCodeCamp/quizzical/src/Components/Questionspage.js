import React from "react";
import Question from "./QuesComponent/Question";

export default function Questionspage() {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
      .then((resp) => resp.json())
      .then((data) => setAllData(data.results));
  }, []);

  const Compo = allData.map((item) => {
    return (
      <Question
        que={item.question}
        correct={item.correct_answer}
        incorect={item.incorrect_answers}
      />
    );
  });

  console.log(allData);
  return (
    <div>
      {Compo}
      <button className="submit--btn">Submit</button>
    </div>
  );
}
