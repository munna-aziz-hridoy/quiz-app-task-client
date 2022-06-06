import React, { useEffect, useState } from "react";

const QuizCard = ({ questions, setUsersCorrectAns, usersCorrectAns }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAns, setUserAns] = useState("");
  const [removeScore, setRemoveScore] = useState(false);

  const handleSelectAns = (ans) => {
    setUserAns(ans);
    if (questions[currentQuestion]?.correctAnswer === ans) {
      setUsersCorrectAns([
        ...usersCorrectAns,
        questions[currentQuestion]?.correctAnswer,
      ]);
    }
  };

  const handleNextQuestion = () => {
    setUserAns("");
    if (currentQuestion === 9) {
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setUserAns("");
    if (currentQuestion === 0) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
    setRemoveScore(true);
  };

  useEffect(() => {
    if (removeScore) {
      const prevCorrectAns = usersCorrectAns.filter(
        (ans) => ans !== questions[currentQuestion]?.correctAnswer
      );

      setUsersCorrectAns(prevCorrectAns);
      setRemoveScore(false);
    }
  }, [
    currentQuestion,
    questions,
    setUsersCorrectAns,
    usersCorrectAns,
    removeScore,
  ]);

  return (
    <div>
      <>
        <div className="card w-[80%] min-w-[1100px] bg-base-100 shadow-xl mx-auto">
          <div className="card-body  text-center justify-start items-start">
            <h2 className="card-title text-left text-xl font-bold text-gray-500 my-5">
              Question-{currentQuestion + 1} :{" "}
              {questions[currentQuestion]?.question}
            </h2>
            <div className="w-full">
              {questions[currentQuestion]?.answer.map((ans, index) => (
                <button
                  disabled={userAns}
                  onClick={() => handleSelectAns(ans)}
                  key={index}
                  className={`text-left p-5 bg-gray-200 w-full rounded-lg my-3 font-medium text-gray-500  ${
                    ans === userAns
                      ? "bg-purple-600 text-slate-100"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index + 1}: {ans}
                </button>
              ))}
            </div>
            <div className="card-actions">
              <button
                disabled={currentQuestion === 0}
                onClick={handlePreviousQuestion}
                className="btn border-2 border-purple-600 btn-outline font-bold text-purple-600"
              >
                Previous
              </button>
              {currentQuestion === 9 ? (
                <button
                  disabled={!userAns}
                  className="btn bg-purple-600 border-purple-600 text-white font-bold"
                >
                  <label htmlFor="scoreModal" className="cursor-pointer">
                    Complete
                  </label>
                </button>
              ) : (
                <button
                  disabled={!userAns}
                  onClick={handleNextQuestion}
                  className="btn bg-purple-600 border-purple-600 text-white font-bold"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            userAns ? "block" : "hidden"
          } flex justify-center items-center mt-10 text-lg font-semibold`}
        >
          {userAns === questions[currentQuestion]?.correctAnswer ? (
            <p className="text-green-600">You answer is correct</p>
          ) : (
            <p className="text-red-600">
              Your answer is wrong. Correct ans is
              <span className="text-green-700">
                {" "}
                "{questions[currentQuestion]?.correctAnswer}"
              </span>
            </p>
          )}
        </div>
      </>
    </div>
  );
};

export default QuizCard;
