import React from 'react';
import "./css/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h2>Firma Adı</h2>
          <p>Firma hakkında kısa bir açıklama.</p>
        </div>
        <div className="footer__links">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/hizmetler">Hizmetler</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>İletişim</h3>
          <p>Adres: Örnek Cadde, Örnek Mahalle, Örnek Şehir</p>
          <p>Telefon: (123) 456-7890</p>
          <p>E-posta: info@firmamail.com</p>
        </div>
        <div className="footer__social">
          <h3>Bizi Takip Edin</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Firma Adı. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
