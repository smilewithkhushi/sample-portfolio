import React from "react";
import './imggallery.css';

function ImageGallery(){
    return (
        <div className = "gallery">
        <div className="clipped-border">
          <img src="acehack1.jpg"/>
        </div>

        <div className="clipped-border">
          <img src="techathon1.jpg" id="clipped"/>
        </div>

        <div class="clipped-border">
          <img src="web3conect2.jpg" id="clipped"/>
        </div>


          <div class="clipped-border">
          <img src="" id="clipped"/>
        </div>

          <div class="clipped-border">
          <img src="web3conect.jpg" id="clipped"/>
        </div>
        <div class = "shadow"></div>
      </div>
      
    );
}

export default ImageGallery;