import { Knob } from 'primereact/knob';


const Card = ({ numInHand, updateNumCards, id, image, max }) => {
  

  // const handleSelect = e => {
  //   const numCards = parseInt(e.target.value, 10);
  //   updateNumCards(id, numCards);
  // }


  // const buildOptions = () => {
  //   const options = [];

  //   for (let i=0; i < max + 1; i++) {
  //     options[i] = <option key={i} value={i}>{i}</option>
  //   }

  //   return options;
  // }

  return(
    <div className="Card">
      <img alt="card" src={image} style={{ marginBottom: '10px' }} />
      {/*<select value={numInHand[id]} id={id} onChange={handleSelect}>
        { buildOptions() }
        </select>*/}
      <Knob value={numInHand[id]}
        min={0} max={max} size={75}
        valueColor={"MediumBlue"}
        rangeColor={"DarkGrey"}
        textColor={"AliceBlue"}
        onChange={(e) => updateNumCards(id,e.value)} />  
    </div>
  );
}

export default Card;
