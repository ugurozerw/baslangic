import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function RandomImageGenerator() {
  const [randomNum, setRandomNum] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const brokenImageNumbers = [138, 286, 968, 394, 561, 751, 332, 589, 207, 587, 
                              843, 224, 897, 636, 333, 462, 624, 748, 752, 761, 
                              934, 105, 720, 734, 753];

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 1000) + 1;
    } while (brokenImageNumbers.includes(randomNumber));

    setRandomNum(randomNumber);
  };

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
      {randomNum !== null && (
        <div className={`con ${isInvalid ? 'invalid-form' : ''}`}>
          <img
            className='signup-bckgrnd'
            src={`https://picsum.photos/id/${randomNum}/750/715`}
            alt={`Rastgele Resim ${randomNum}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <div className='disabled-link'>
              <Link to="/">
                <Button className="btnback-pos-signup" size="md">
                  <BsFillArrowLeftCircleFill size={25} />
                </Button>
              </Link>
            </div>
            
            <h1>Merhaba, Bu bir metin örneğidir</h1>
            <p>İstediğiniz metni buraya ekleyebilirsiniz.</p>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default RandomImageGenerator;
