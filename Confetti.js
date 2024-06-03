import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Confetti from "react-confetti";

const Test = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(!showConfetti);
  };

  return (
    <div>
      <Button onClick={handleConfetti}>
        {" "}
        {showConfetti ? "Stop" : "Celebrate"}
      </Button>
      {showConfetti && (
        <Confetti
          width={width}
          height={height} 
          recycle={false} //only one time show 
          numberOfPieces={500}
        />
      )}
    </div>
  );
};

export default Test;
