import React, { useState, useEffect } from "react";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "./Footer"
import "./css/iletisim.css"

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false); // Hata başlangıçta false
  const [emailError, setEmailError] = useState(false); // Hata başlangıçta false

  const onSubmit = (e) => {
    e.preventDefault();
    let hasError = false; // Hata kontrolü için bir bayrak

    // Ad alanını kontrol et
    if (!name) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false); // Hata yoksa hata sınıfını kaldır
    }

    // E-posta adresini kontrol et
    if (!validateEmail(email)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false); // Hata yoksa hata sınıfını kaldır
    }

    // Diğer form alanlarını kontrol et

    if (hasError) {
      // Hata varsa formun etrafına kırmızı sınır ekler
      document.querySelector("form").classList.add("error-border");
    } else {
      // Hata yoksa kırmızı sınıfı kaldırır
      document.querySelector("form").classList.remove("error-border");
      // Form verilerini sunucuya gönder
      console.log(name, email, message);
    }
  };

  // E-posta doğrulama fonksiyonu
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <>
      <CustomNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>İletişim</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  className={`form-control form-control-lg my-2 ${
                    nameError ? "error-border" : "" // Hata durumuna göre sınıf ekler
                  }`}
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false); // Ad düzeltilince hata sınıfını kaldır
                  }}
                />
                {!name && (
                  <small className="form-text text-muted">Adınızı girin</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta adresiniz</label>
                <input
                  type="email"
                  className={`form-control form-control-lg my-2 ${
                    emailError ? "error-border" : "" // Hata durumuna göre sınıf ekler
                  }`}
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false); // E-posta düzeltilince hata sınıfını kaldır
                  }}
                />
                {emailError && (
                  <span className="text-danger">E-posta adresi geçersizdir.</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  className="form-control form-control-lg my-2"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary my-2"
              >
                Gönder
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="https://picsum.photos/id/84/700/600"
              alt="Görsel"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactPage;
