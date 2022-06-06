import { useEffect, useState } from "react";
import QuizCard from "./Components/QuizCard";
import ScoreModal from "./Components/ScoreModal";
import Spinner from "./Components/Spinner";

function App() {
  const [questions, setQuestions] = useState([]);
  const [usersCorrectAns, setUsersCorrectAns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sleepy-taiga-40810.herokuapp.com/getAllQuestions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center relative">
      <p className="absolute right-24 top-10 text-2xl font-bold text-gray-600">
        Your Score: {usersCorrectAns.length}
      </p>
      <div>
        <h1 className="text-gray-600 text-5xl font-bold mb-12 text-center">
          Quiz App
        </h1>
        <QuizCard
          questions={questions}
          setUsersCorrectAns={setUsersCorrectAns}
          usersCorrectAns={usersCorrectAns}
        />
        <ScoreModal usersCorrectAns={usersCorrectAns} />
      </div>
    </div>
  );
}

export default App;
