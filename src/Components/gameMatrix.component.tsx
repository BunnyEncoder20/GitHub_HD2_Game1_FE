import React from 'react';
import { SingleCard } from "./card.component.tsx"

interface GameMatrixProps {
    cards : { id: number; src: string;}[] ,
    turns : number
}


const GameMatrix: React.FC<GameMatrixProps> = ({cards, turns}) => {
    return (
        <div className="card-grid">
            {
                cards.map(card => (
                    <SingleCard key={card.id} card={card}/>
                ))
            }
        </div>
    );
};

export {
    GameMatrix
};