import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./Header";
import Footer from "./Footer";
import BG1 from './Backgrounds/Bg1';
import BG2 from './Backgrounds/Bg2';
import BG3 from './Backgrounds/Bg3';
import BG4 from './Backgrounds/Bg4';
import BG5 from './Backgrounds/Bg5';


function App() {
    return(
        <div>
            <Header />           
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG1 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG2 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG3 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG4 />
            {/* <img className="bg10" src="https://png.pngtree.com/background/20230524/original/pngtree-futuristic-background-with-orange-lights-moving-across-the-frame-picture-image_2711578.jpg" alt="background1"></img> */}
            <BG5 />
            {/* <h1>YOU SUCKKKKKK</h1> */}
            <Footer />
        </div>
    )
};

export default App;