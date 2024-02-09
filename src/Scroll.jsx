import React from 'react';

function Scroll() {
    const scrollThreshold = 60; // Adjust this value as needed

    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("dashboard_logo");
    const dashLinks = document.getElementsByClassName("dashlinks");

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // On scroll down
        navbar.classList.add("scrolled");
    } else {
        // On scroll up to top
        navbar.classList.remove("scrolled");
    }
}

export default Scroll;


// function Scroll() {
//     const scrollThreshold = 60; // Adjust this value as needed

//     const navbar = document.getElementById("navbar");
//     const logo = document.getElementById("dashboard_logo");
//     const dashLinks = document.getElementsByClassName("dashlinks");

//     if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
//         // On scroll down
//         navbar.style.padding = "10px 10px";
//         logo.style.width = "85%"; // Adjust the size as needed
//         logo.style.height = "auto"; // Maintain aspect ratio
//         logo.style.marginTop = "-30px";
//         // Adjust font size for each link
//         for (let i = 0; i < dashLinks.length; i++) {
//             dashLinks[i].style.fontSize = "14px"; // Adjust the font size as needed
//         }
//     } else {
//         // On scroll up to top
//         navbar.style.padding = "30px 10px";
//         logo.style.width = "100%"; // Return to original size
//         logo.style.height = "auto"; // Maintain aspect ratio
//         logo.style.marginTop = "0";
//         // Return font size for each link to original
//         for (let i = 0; i < dashLinks.length; i++) {
//             dashLinks[i].style.fontSize = "18px"; // Return to original font size
//         }
//     }
// }



// function Scroll() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("dashboard_logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("dashboard_logo").style.fontSize = "35px";
//   }
// }


// function Scroll() {
//     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) { //On scroll down 100-x%, do:
//       document.getElementById("navbar").style.padding = "10px 5px";
//     //   document.getElementsByClassName("dashlinks").style.fontSize = "2px"
//         // document.getElementById("navbar-right").style.fontSize = "4pt";
//     //   document.getElementById("navbar-right", "dashlinks").style.fontSize = "40pt";
//       document.getElementById("dashboard_logo").style.width = "280px";
//       document.getElementById("dashboard_logo").style.height = "94.5px";
//       document.getElementById("dashboard_logo").style.marginRight = "+150px";
//     // document.getElementById("dashboard_logo").style.marginRight = "+100px";
      
//     } else {
//       document.getElementById("navbar").style.padding = "30px 10px"; //on scroll up to max/top
//     //   document.getElementById("navbar-right").style.fontSize = "90pt";
//       document.getElementById("dashboard_logo").style.width = "400px";
//       document.getElementById("dashboard_logo").style.height = "135px";
//       document.getElementById("dashboard_logo").style.marginTop = "+10px";
//       document.getElementById("dashboard_logo").style.marginRight = "-30px";
      
//     }
//   }

