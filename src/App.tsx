import './App.css';

import React, { useState } from 'react';
import { SingleCard } from './Components/card.component.tsx';
import  { CardType } from './Types/types.ts';

const cardImages = [
  { "src" : "./assets/Eagles/Eagle 110MM Rocket Pods.png"},
  { "src" : "./assets/Eagles/Eagle 500KG Bomb.png"},
  { "src" : "./assets/Eagles/Eagle Airstrike.png"},
  { "src" : "./assets/Eagles/Eagle Cluster Bomb.png"},
  { "src" : "./assets/Eagles/Eagle Napalm Airstrike.png"},
  { "src" : "./assets/Eagles/Eagle Rearm.png"},
  { "src" : "./assets/Eagles/Eagle Smoke Strike.png"},
  { "src" : "./assets/Eagles/Eagle Strafing Run.png"},
]

function App() {

  // State to keep track of our cards
  const [cards, setCards] = useState<CardType[]>([]); 

  // State for keeping track of turns 
  const [turns, setTurns] = useState<number>(0);

  // State for keeping track of user selected cards
  const [choice1, setChoice1] = useState< CardType | null>(null);
  const [choice2, setChoice2] = useState< CardType | null>(null);

  // Function to start / restart the game
  const start_game = () => {
    // duplicate the cards cause we want there to be 2 cards with the same image
    // Then we use the sort method to get a random order of the cards
    // This is done by swapping  the cards when the random number is < 0
    // Next we attach an random (6 digit positive number) id onto each of the cards using map
    const shuffledDeck = [
      ...cardImages, 
      ...cardImages
    ]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.floor(100000 + Math.random()*900000) }) )

    // Make a new random cards list 
    setCards(shuffledDeck)

    // Reset the turns 
    setTurns(0)
  }

  // Function to handle tile picking
  const handleChoice = (card : CardType ) => {
    console.log(card)
  }


  return (
    <>
      <h1>HellDivers Card Memory Game</h1>
      <button onClick = {start_game}> Play </button>

      <div className="card-grid">
        {
          cards.map(card => (
            <SingleCard 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
