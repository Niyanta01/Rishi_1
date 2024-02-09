// components of BG1
import React from 'react';

const BG1 = () => (
  <div className="bg1">
    <div className="content">
      <h1 style={{fontSize: 90}}>EMPOWERING<br />CUSTOMER SUPPORT<br />WITH<br />GenAI</h1> 
      <br />
      <button class="pushable" href="#bg2">  
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front" ><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
          
        
      </button>
      
      {/* <button onClick={() => console.log('Button Clicked!')}>Next</button> */}
    </div>
  </div>
);

export default BG1;