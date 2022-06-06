import React from "react";

const ScoreModal = ({ usersCorrectAns }) => {
  return (
    <>
      <input type="checkbox" id="scoreModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg text-center text-gray-500">
            Congratulations
          </h3>
          <p className="py-4 text-center text-4xl font-bold text-gray-600">
            Your Score is {usersCorrectAns.length}
          </p>
          <div className="modal-action">
            <label htmlFor="scoreModal" className="btn">
              <a href="/"> OK</a>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;
