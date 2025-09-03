import React from 'react';

const Footer = () => (
  <footer className="bg-white p-4 mt-4 shadow-inner">
    <div className="flex justify-between flex-wrap">
      <div>
        <h3 className="font-bold">NEED HELP</h3>
        <ul className="text-sm">
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Track Order</li>
          <li>Account</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">COMPANY</h3>
        <ul className="text-sm">
          <li>About Us</li>
          <li>Investor Relations</li>
          <li>Careers</li>
          <li>Community Initiatives</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">MORE INFO</h3>
        <ul className="text-sm">
          <li>T&C</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
          <li>Get Notified</li>
        </ul>
      </div>
      <div>
        <p>100% Secure Payment: <span className="text-blue-500">Visa, Mastercard, etc.</span></p>
        <p>Shipping Partners: <span className="text-blue-500">DHL, FedEx, etc.</span></p>
        <p>© OkkiO.in 2025 | email@okkiO.in | 9991236789</p>
      </div>
    </div>
  </footer>
);

export default Footer;