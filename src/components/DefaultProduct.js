import React, { useState } from 'react';
import './DefaultProduct.css';
import Blue from "../Products/Product-Blue.webp";
import Black from "../Products/Product-Black.webp";
import Red from "../Products/Product-Red.webp";

const DefaultProduct = () => {
  const [showBlack, setShowBlack] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [tickBlack, setTickBlack] = useState(false);
  const [tickRed, setTickRed] = useState(false);
  const [tick, setTick] = useState(true);
  const [animateTextBlue, setAnimateTextBlue] = useState(true);
  const [animateTextBlack, setAnimateTextBlack] = useState(false);
  const [animateTextRed, setAnimateTextRed] = useState(false);
  const [animateTextBlueRight, setAnimateTextBlueRight] = useState(true);
  const [animateTextBlackRight, setAnimateTextBlackRight] = useState(false);
  const [animateTextRedRight, setAnimateTextRedRight] = useState(false);

  const handleCircleClickBlack = () => {
    setShowBlack(true);
    setShowRed(false);
    setTickBlack(true);
    setTickRed(false);
    setTick(false);
    setAnimateTextBlack(true);
    setAnimateTextBlue(false);
    setAnimateTextRed(false);
    setAnimateTextBlackRight(true);
    setAnimateTextBlueRight(false);
    setAnimateTextRedRight(false);
    document.body.classList.remove('body-red');
    document.body.classList.add('body-black');
  };

  const handleCircleClickRed = () => {
    setShowRed(true);
    setShowBlack(false);
    setTickRed(true);
    setTickBlack(false);
    setTick(false);
    setAnimateTextRed(true);
    setAnimateTextBlack(false);
    setAnimateTextBlue(false);
    setAnimateTextRedRight(true);
    setAnimateTextBlackRight(false);
    setAnimateTextBlueRight(false);
    document.body.classList.remove('body-black');
    document.body.classList.add('body-red');
  };

  const handleCircleClickBlue = () => {
    setShowBlack(false);
    setShowRed(false);
    setTickBlack(false);
    setTickRed(false);
    setTick(true);
    setAnimateTextBlack(false);
    setAnimateTextRed(false);
    setAnimateTextBlue(true);
    setAnimateTextBlackRight(false);
    setAnimateTextRedRight(false);
    setAnimateTextBlueRight(true);
    document.body.classList.remove('body-black', 'body-red');
  };

  return (
    <section>
      <div className="container">
        <div className="header">
          FOGG
        </div>
        {showBlack && (
          <img src={Black} alt="Black" className="product-image-black" />
        )}
        {showRed && (
          <img src={Red} alt="Red" className="product-image-red" />
        )}
        {!showBlack && !showRed && tick && (
          <img src={Blue} alt="Blue" className="product-image" />
        )}
      </div>
      <div className="footer">
        <div className="circle" onClick={handleCircleClickBlue}>
          {tick && <div className="tick"></div>}
        </div>
        <div className="circle-black" onClick={handleCircleClickBlack}>
          {tickBlack && <div className="tick"></div>}
        </div>
        <div className="circle-red" onClick={handleCircleClickRed}>
          {tickRed && <div className="tick"></div>}
        </div>
      </div>

      {animateTextBlack && (
        <div className='left-text'>
          <h3>Fogg Marco No Gas Deodorant for Men, Long-Lasting Perfume Body Spray, 150 ml</h3>
          <div>
            <span> ₹220 </span>
            <span style={{ color: "#FF0000" }}>-20%</span>
            <div className="price-container">
              <h1 className="price">₹146.67</h1> <span>per ml</span>
            </div>
          </div>
         
        </div>
      )}
      {animateTextBlackRight &&
      ( <div className='right-text'>
       <p>Brand: FOGG</p>
       <p>Item Form: Spray</p>
       <p>Scent: Marco</p>
       <p>Material Type Free: No Gas</p>
       <p>Special Feature: Long Lasting</p>
       <p>Material Feature: Natural</p>
       <p>Net Quantity: 150.0 Millilitre</p>
       <p>Item Volume: 150 Millilitres</p>
       <p>Use For: Whole Body</p>
     </div>)
      }

      {animateTextBlue && !animateTextBlack && !animateTextRed && (
        <div className='left-text'>
          <h3>Fogg Marco No Gas Deodorant for Men, Long-Lasting Perfume Body Spray, 150 ml</h3>
          <div>
            <span> ₹220 </span>
            <span style={{ color: "#FF0000" }}>-20%</span>
            <div className="price-container">
              <h1 className="price">₹146.67</h1> <span>per ml</span>
            </div>
          </div>
         
        </div>
      )}
      {
        animateTextBlueRight && !animateTextBlackRight && !animateTextRedRight && 
      (  <div className='right-text'>
        <p>Brand: FOGG</p>
        <p>Item Form: Spray</p>
        <p>Scent: Marco</p>
        <p>Material Type Free: No Gas</p>
        <p>Special Feature: Long Lasting</p>
        <p>Material Feature: Natural</p>
        <p>Net Quantity: 150.0 Millilitre</p>
        <p>Item Volume: 150 Millilitres</p>
        <p>Use For: Whole Body</p>
      </div>)
      }
      
      {animateTextRed && (
        <div className='left-text'>
          <h3>Fogg Marco No Gas Deodorant for Men, Long-Lasting Perfume Body Spray, 150 ml</h3>
          <div>
            <span> ₹220 </span>
            <span style={{ color: "Black" }}>-20%</span>
            <div className="price-container">
              <h1 className="price">₹146.67</h1> <span>per ml</span>
            </div>
          </div>
         
        </div>
      )}
      { animateTextRedRight && (
         <div className='right-text'>
            <p>Brand: FOGG</p>
            <p>Item Form: Spray</p>
            <p>Scent: Marco</p>
            <p>Material Type Free: No Gas</p>
            <p>Special Feature: Long Lasting</p>
            <p>Material Feature: Natural</p>
            <p>Net Quantity: 150.0 Millilitre</p>
            <p>Item Volume: 150 Millilitres</p>
            <p>Use For: Whole Body</p>
          </div>
      )

      }
    </section>
  );
}

export default DefaultProduct;
