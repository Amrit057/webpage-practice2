import React from "react";

function Content() {
  return (
    <div className="content">
      <div className="service_div">
        <h2 className="service">Services</h2>

        <ul>
          <li>Software Development</li>
          <li>Mobile App Development</li>
          <li>Graphics Designing</li>
          <li>Search Engine Optimization</li>
          <li>Social Media Marketing</li>
        </ul>
      </div>
      <div className="about_div">
        <h2 className="about">About us</h2>
        <h1 className="mission">Our mission & vision</h1>
        <p>
          This mismatch led us to create the vision of changing the way of
          businesses in today's world. With our powerful, easy to use and
          integrated set of solutions, we enable businesses to attract, engage,
          and delight customers by delivering experiences that are relevant,
          helpful and personalized. WebPal is, after all, on a mission to make
          the world more mobile - one business transformation after another.
        </p>
      </div>

      <div className="contact_div">
        <h2 className="contact">Webpal</h2>
        <p>
          WebPal Private Limited
          <br />
          Koteshwor, Kathmandu, Nepal
          <br />
          Company Reg. No: 201471/75/76
          <br />
          VAT Reg. No: 606560771
          <br />
        </p>
      </div>
    </div>
  );
}

export default Content;
