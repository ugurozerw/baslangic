import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RandomImageGenerator() {
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setRandomNum(randomNumber);
  };

  return (
    <div>
      {randomNum !== null && (
        <div>
            <img
              src={`https://picsum.photos/id/${randomNum}/750/900`}
              alt={`Rastgele Resim ${randomNum}`}
            />
            <button>
              <Link to="/">Anasayfa</Link>
            </button>
        </div>
      )}
          </div>
      
  );
}

export default RandomImageGenerator;
