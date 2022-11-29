import { useState } from "react";


const Card = ({ numInHand, updateNumCards, id, image, max }) => {
  

  const handleSelect = (e) => {
    const numCards = parseInt(e.target.value, 10);
    updateNumCards(id, numCards);
  }


  const buildOptions = () => {
    const options = [];

    for (let i=0; i < max + 1; i++) {
      options[i] = <option key={i} value={i}>{i}</option>
    }

    return options;
  }

  return(
    <div className="Card">
      <img alt="card" src={image} style={{ marginBottom: '10px' }} />
      <select value={numInHand[id]} id={id} onChange={handleSelect}>
        { buildOptions() }
      </select>
    </div>
  );
}

export default Card;
