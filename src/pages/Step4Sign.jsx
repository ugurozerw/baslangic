import React, { useState } from 'react';
import Swal from 'sweetalert2';

import "./sign.css"

function Step4Sign() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    paymentMethod: '',
    additionalInfo: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep1 = () => {
    // Tüm gerekli alanları kontrol et
    if (formData.firstName === '' || formData.lastName === '') {
      Swal.fire({
        icon: 'error',
        title: 'Hata',
        text: 'İsim ve soyad bilgisini lütfen giriniz.',
      });
    } else {
      setCurrentStep(currentStep + 1);
    }
  };


const nextStep2 = () => {
  // Tüm gerekli alanları kontrol et
  if (formData.address === '') {
    Swal.fire({
      icon: 'error',
      title: 'Hata',
      text: 'Adres bilgisini lütfen giriniz.',
    });
  } else {
    setCurrentStep(currentStep + 1);
  }
};


const nextStep3 = () => {
  // Tüm gerekli alanları kontrol et
  if (formData.paymentMethod === '') {
    Swal.fire({
      icon: 'error',
      title: 'Hata',
      text: 'Ödeme yöntemini lütfen seçiniz.',
    });
  } else {
    setCurrentStep(currentStep + 1);
  }
};


  const nextStep4 = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

    
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form işlemleri burada yapılabilir.
    console.log(formData);

    Swal.fire({
      icon: 'success',
      title: 'Kaydedildi!',
      showConfirmButton: false, // Sadece otomatik olarak kapatılsın
      timer: 1500, // İletişim kutusunun ne kadar süre gösterileceğini belirtir (milisaniye cinsinden)
    });

    // Onaylandığında "/" adresine yönlendir
    window.location.href = '/';
  };

  const { firstName, lastName } = formData;

  // Görmek için
  console.log('firstName:', firstName);
  console.log('lastName:', lastName);

  return (
    <div>
      
      <div className="form-container">
      {currentStep === 1 && (
        <div className={`form-step step-${currentStep}`}>
          <h1 className='yazi'>Aşama 1: Temel Bilgiler</h1>
          <input
            type="text"
            name="firstName"
            placeholder="Ad"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Soyad"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
          />
          <button onClick={nextStep1} className="form-button">İleri</button>
        </div>
      )}

      {currentStep === 2 && (
        <div className={`form-step step-${currentStep}`}>
          <h1 className='yazi'>Aşama 2: Adres Bilgileri</h1>
          <input
            type="text"
            name="address"
            placeholder="Adres"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
          <button onClick={prevStep} className="form-button">Geri</button>
          <button onClick={nextStep2} className="form-button">İleri</button>
        </div>
      )}
    </div>
  

{currentStep === 3 && (
  <div className="form-step">
    <h1 className='yazi'>Aşama 3: Ödeme Bilgileri</h1>
    <select
      name="paymentMethod"
      value={formData.paymentMethod}
      onChange={handleChange}
      className="form-select"
    >
      <option value="">Ödeme Yöntemi Seçin</option>
      <option value="creditCard">Kredi Kartı</option>
      <option value="paypal">PayPal</option>
    </select>
    <button onClick={prevStep} className="form-button">Geri</button>
    <button onClick={nextStep3} className="form-button">İleri</button>
  </div>
)}


{currentStep === 4 && (
  <div className="form-step">
    <h1 className='yazi'>Aşama 4: Ek Bilgiler</h1>
    <textarea
      name="additionalInfo"
      placeholder="Ek bilgilerinizi buraya ekleyin."
      value={formData.additionalInfo}
      onChange={handleChange}
      className="form-textarea"
    ></textarea>
    <button onClick={prevStep} className="form-button">Geri</button>
    <button onClick={nextStep4} className="form-button">İleri</button>
  </div>
)}


{currentStep === 5 && (
  <div className="form-step yazi">
    <h1 className=''>Aşama 5: Onay</h1>
      <div className='mini-yazi'>
        <p>Ad: {formData.firstName}</p>
        <p>Soyad: {formData.lastName}</p>
        <p>Adres: {formData.address}</p>
        <p>Ödeme Yöntemi: {formData.paymentMethod}</p>
        {/* <p>Ek Bilgiler: {formData.additionalInfo}</p> */}
      </div>
    <button onClick={prevStep} className="form-button">Geri</button>
    <button onClick={handleSubmit} className="form-button">Onayla</button>
    
  </div>
)}
</div>


  )}


export default Step4Sign;