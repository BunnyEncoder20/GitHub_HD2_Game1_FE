import "./App.css";

import React, { useEffect, useState } from "react";
import { SingleCard } from "./Components/card.component.tsx";
import { CardType } from "./Types/types.ts";

const cardImages = [
  { "src": "./assets/Eagles/Eagle 110MM Rocket Pods.png", "matched": false },
  { "src": "./assets/Eagles/Eagle 500KG Bomb.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Airstrike.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Cluster Bomb.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Napalm Airstrike.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Rearm.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Smoke Strike.png", "matched": false },
  { "src": "./assets/Eagles/Eagle Strafing Run.png", "matched": false },
];

function App() {
  // State to keep track of our cards
  const [cards, setCards] = useState<CardType[]>([]);

  // State for keeping track of turns
  const [turns, setTurns] = useState<number>(0);

  // State for keeping track of user selected cards
  const [choice1, setChoice1] = useState<CardType | null>(null);
  const [choice2, setChoice2] = useState<CardType | null>(null);

  // State to diable card selection
  const [disabled, setDisabled] = useState<boolean>(false);

  // UseEffect Hook to start game automagically
  useEffect(() => {
    start_game();
  },[])

  // Function to start / restart the game
  const start_game = () => {
    // duplicate the cards cause we want there to be 2 cards with the same image
    // Then we use the sort method to get a random order of the cards
    // This is done by swapping  the cards when the random number is < 0
    // Next we attach an random (6 digit positive number) id onto each of the cards using map
    const shuffledDeck = [
      ...cardImages,
      ...cardImages,
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.floor(100000 + Math.random() * 900000),
      }));

    // Make a new random cards list
    setCards(shuffledDeck);

    // Reset the choices 
    setChoice1(null);
    setChoice2(null);

    // Reset the turns
    setTurns(0);
  };

  // Function to handle tile picking
  const handleChoice = (card: CardType) => {
    choice1 ? setChoice2(card) : setChoice1(card);

    // We cannot compare the cards here cause the states might not be updated yet
    // States updates are scheduled and hence we will use hook : useEffect
  };

  useEffect(() => {
    
    if (choice1 && choice2) {
      // disable the selection of other cards 
      setDisabled(true);

      if (choice1.src === choice2.src) {
    	console.log("Those Cards Match ☑️");

        setCards((prevCards) => {
          return prevCards.map((card) => {

            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } 
			else {
              return card;
            }

          });
        });
		
		resetChoices();
      } else {
        console.log("Those cards do not match ☒️");
		setTimeout(() => resetChoices(), 1000);
      }

    } else {
      // if(!choice1){
      //   console.log("choice1 not selected ☒️")
      // }
      // if(!choice2){
      //   console.log("choice2 not selected ☒️")
      // }
    }
  }, [choice1, choice2]);

  const resetChoices = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurns) => prevTurns + 1);

    // enable the selection of other cards
    setDisabled(false);
  };


  return (
    <div className="game-container">
      <h1>HellDivers Card Memory Game</h1>
      <button onClick={start_game}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
			      flipped = {card.matched || card === choice1 || card === choice2}
            disabled = {disabled}
          />
        ))}
      </div>

      <div className="turnsDisplay">
        <h1>Turns: {turns}</h1>
      </div>
    </div>
  );
}

export default App;
