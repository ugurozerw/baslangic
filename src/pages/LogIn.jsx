import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import './cssforpages.css';


// Bozuk resimler
const brokenImageNumbers = [138, 286, 968, 394, 561, 751, 332, 589, 207, 587, 
                            843, 224, 897, 636, 333, 462, 624, 748, 752, 761, 
                            934, 105];

function RandomImageGenerator() {
  const [randomNum, setRandomNum] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 1000) + 1;
    } while (brokenImageNumbers.includes(randomNumber)); // Bozuk resimlerin kontrolü

    setRandomNum(randomNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Örnek email ve şifre doğrulaması
    if (email === 'example@example.com' && password === 'password123') {
      setIsInvalid(false); // Geçerli giriş
    } else {
      setIsInvalid(true); // Uygun olmayan giriş
    }
  };

  return (
    <div>
      {randomNum !== null && (
        <div className={`con ${isInvalid ? 'invalid-form' : ''}`}>
          <div className="half">
            <img
              src={`https://picsum.photos/id/${randomNum}/750/715`}
              alt={`Rastgele Resim ${randomNum}`}
            />
          </div>
          <div className={`half loginbackgroundpart2 ${isInvalid ? 'invalid-form' : ''}`}>
            <h1 className={`${isInvalid ? 'invalid-text' : ''}`}>
              <Link to="/">
                <span>
                  <Button className="btnback-pos" size="md">
                    <BsFillArrowLeftCircleFill size={25} />
                  </Button>
                </span>
              </Link>
              <h1 className="wavedesign1">
                DFJGAODĞGFJSJDOANGPJODNG AĞOSGJDNAĞSOGLJFNAOGJLSDNOSLJDAGNOĞSGJDNAOSĞASFOALSFSDJANONGAOSP
                ASDIOFGHĞASJDGOSDOGIJKASDGĞİSDGJ
              </h1>
            </h1>
            <h1 className={`loginh1 ${isInvalid ? 'invalid-text' : ''}`}>
              We <span className='kayan-yazi'>share</span> your future
            </h1>
            <Form className={`formic ${isInvalid ? 'invalid-form' : ''}`} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className={`shadowofcontrol ${isInvalid ? 'is-invalid' : ''}`}
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={`shadowofcontrol ${isInvalid ? 'is-invalid' : ''}`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="better-btn2" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}

    </div>
  )
}

export default RandomImageGenerator;
