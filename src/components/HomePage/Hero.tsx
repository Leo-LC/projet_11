import React from "react";

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='hero-image'>
          <img
            src='src/assets/img/bank-tree.jpg'
            alt='baby tree in a pot of coins'
          />
        </div>
        <div className='hero-content'>
          <h2 className='sr-only'>Promoted Content</h2>
          <p className='subtitle'>No fees.</p>
          <p className='subtitle'>No minimum deposit.</p>
          <p className='subtitle'>High interest rates.</p>
          <p className='text'>Open a savings account with Argent Bank today!</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
