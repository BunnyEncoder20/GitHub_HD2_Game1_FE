import './Card.component.css';

import React from 'react';
import { card_bg_path } from '../constants.ts';
import { CardType } from '../Types/types.ts';

interface SingleCardProps {
    card : CardType;
    handleChoice(card : CardType) : void
}

const SingleCard: React.FC<SingleCardProps> = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card" key={card.id}>
            <div>
                <img src={card.src} className="card-front" alt="card frontside" />
                <img src={card_bg_path} className="card-back" alt="card backside" onClick = {handleClick}/>
            </div>
        </div>
    )
}

export { SingleCard };