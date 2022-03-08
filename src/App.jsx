import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "netflix";

// const FavS = () => {
//     if(favSeries === "amazon") {
//         return <Netflix />
//     } else {
//         return <Amazon />
//     }
// };



const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
    { /*<FavS /> */}

    { favSeries === "netflix" ?  <Netflix /> :  <Amazon /> }
    // map mera ek function h uske aander ncard function to uske bolte h functional programming ya callback function
  </>
  )

  export default App;