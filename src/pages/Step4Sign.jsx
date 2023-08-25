import React, { useState } from 'react';
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

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form işlemleri burada yapılabilir.
    console.log(formData);

    // Onaylandığında "/" adresine yönlendir
    window.location.href = '/';
  };

  return (
    <div>
      {currentStep === 1 && (
  <div className="form-step">
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
    <button onClick={nextStep} className="form-button">İleri</button>
  </div>
)}


{currentStep === 2 && (
  <div className="form-step">
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
    <button onClick={nextStep} className="form-button">İleri</button>
  </div>
)}

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
    <button onClick={nextStep} className="form-button">İleri</button>
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
    <button onClick={nextStep} className="form-button">İleri</button>
  </div>
)}


{currentStep === 5 && (
  <div className="form-step">
    <h1 className='yazi2'>Aşama 5: Onay</h1>
    <p>Ad: {formData.firstName}</p>
    <p>Soyad: {formData.lastName}</p>
    <p>Adres: {formData.address}</p>
    <p>Ödeme Yöntemi: {formData.paymentMethod}</p>
    <p>Ek Bilgiler: {formData.additionalInfo}</p>
    <button onClick={prevStep} className="form-button">Geri</button>
    <button onClick={handleSubmit} className="form-button">Onayla</button>
  </div>
)}

</div>
  )}


export default Step4Sign;