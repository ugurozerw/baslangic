import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import '../pages/css/cssforpages.css';
import { FormText } from 'react-bootstrap';
import Footer from './Footer'

const brokenImageNumbers = [138, 286, 968, 394, 561, 751, 332, 589, 207, 587, 
                            843, 224, 897, 636, 333, 462, 624, 748, 752, 761, 
                            934, 105, 720, 734, 753, 422, 750, 854, 470, 749,
                            725, 359, 895, 150, 647, 150, 414, 754, 303, 578,
                            632, 712, 762, 226, 792];

function RandomImageGenerator() {
  const [randomNum, setRandomNum] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formu submit etmeden önce validationları kontrol et
    const validationErrors = validateForm({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsInvalid(true);
      return;
    }
    
    // Formu server'a gönder veya istediğiniz işlemi gerçekleştirin
  };
  
  const validateForm = ({ email, password }) => {
    const validationErrors = {};
    
    // Email adresinin geçerli olup olmadığını kontrol et
    if (!email.includes('@')) {
      validationErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
    }
    
    // Şifrenin uzunluğunu kontrol et
    if (password.length < 8) {
      validationErrors.password = 'Şifre en az 8 karakter uzunluğunda olmalıdır.';
    }
    
    // Şifrenin büyük ve küçük harf içerdiğini kontrol et
    const letters = new Set(password.split(''));
    if (!letters.has('A') || !letters.has('a')) {
      validationErrors.password = 'Şifre en az bir büyük harf ve en az bir küçük harf içermelidir.';
    }
    
    return validationErrors;
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
                DFJGAODĞGFJSJDOANGPJODNGAAĞOSGJDNAĞSOGLJ
                FNAOGJLSDNOSLJDAGNOĞSGJDNAOSĞASFOALSFSDJ
                ANONGAOSPASDIOFGHĞASJDGOSDOGIJKASDGĞİSDGASD
              </h1>
            </h1>
            <h1 className={`loginh1 ${isInvalid ? 'invalid-text' : ''}`}>
              We <span className='kayan-yazi'>share</span> your future
            </h1>
            <Form className={`form-step ${isInvalid ? 'invalid-form' : ''}`} onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>E-posta Adresi</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    {errors.email}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Şifrenizi girin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password}
                  </Form.Text>
                )}
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
  );
}

export default RandomImageGenerator;
