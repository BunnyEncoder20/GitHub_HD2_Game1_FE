import './Card.component.css';

import React from 'react';
import { card_bg_path } from '../constants.ts';
import { CardType } from '../Types/types.ts';

interface SingleCardProps {
    card : CardType;
    handleChoice(card : CardType) : void;
    flipped: boolean;
    disabled: boolean;
}

const SingleCard: React.FC<SingleCardProps> = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }

    return (
        <div className="card" key={card.id}>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className="frontside" alt="card frontside" />
                <img src={card_bg_path} className="backside" alt="card backside" onClick = {handleClick}/>
            </div>
        </div>
    )
}

export { SingleCard };