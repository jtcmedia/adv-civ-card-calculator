import './App.css';
import Card from './Card';
import Hand from './Hand';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import cardData from './cards.json';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const StyledValue = styled.span`
  font-size: 25pt;
  width: 3em;
  text-align: center;
  margin-top: 10px;
  margin-right: 5px;
  padding: 10px;
`;


const StyledButton = styled.button`
  font-size: 15pt;
  width: 8em;
  text-align: center;
  margin: 20px;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);
`;


const App = () => {

  const [ cards ] = useState(cardData.cards);

  const [ value, setValue ] = useState(0);
  const [ orgVal, setOrgVal ] = useState(0);

  const [ numInHand, setNumInHand ] = useState([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
  // 0: ochre, 1: hides, 2: iron, 3: salt, 4: timber, 5: grain, 6: oil
  // 7: cloth, 8: wine, 9: bronze, 10: spice, 11: gems, 12: gold 

  useEffect( () => {
    console.log('useEffect in App executed!');
    updateValue();
  },[numInHand]);


  const updateNumCards = (id, numCards) => {
      const index = parseInt(id, 10);
      const numCardsInHand = [ ...numInHand ];
      numCardsInHand[id] = numCards;
      setNumInHand(numCardsInHand);
  }


  const updateValue = () => {
    let runningTotal = 0;

    cards.forEach( ( card, index ) => {
      runningTotal += numInHand[index]**2 * card.value;
      //console.log(runningTotal);
    })

    setValue(runningTotal);
  }

  const handleResetButton = e => {
    // reset all number of cards to 0
    const numCardsInHand = [ ...numInHand ];
    numCardsInHand.fill(0);
    setNumInHand(numCardsInHand);
  }

  const handleCopyButton = e => {
    setOrgVal(value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Advanced Civilization Trade Card Calculator</h3>
        <div>
          <Hand />
          <Hand />
        </div>
        <div>
          <span>Current Hand Value:</span>
          <StyledValue>${value}</StyledValue>
          <StyledButton onClick={handleCopyButton}>
              Copy Over Value =&gt;
          </StyledButton>
          <span>Original Hand Value:</span>
          <StyledValue>${orgVal}</StyledValue>
        </div>
      </header>
      <section className="App-buttons">
        <StyledButton onClick={handleResetButton}>
            Reset Hand
        </StyledButton>
        
      </section>
      <main className="App-main">
        <DndProvider backend={HTML5Backend}>
          { cards.map( card => 
              <Card key={card.id} numInHand={numInHand} updateNumCards={updateNumCards} {...card} />
          )}
        </DndProvider>
      </main>
    </div>
  );
}


export default App;
