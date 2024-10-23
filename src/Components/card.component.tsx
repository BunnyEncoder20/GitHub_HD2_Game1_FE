import './Card.component.css';
import React from 'react';
import { card_bg_path } from '../constants.ts';

interface SingleCardProps {
    card : { id: number; src: string };
}

const SingleCard: React.FC<SingleCardProps> = ({card}) => {
    return (
        <div className="card" key={card.id}>
            <div>
                <img src={card.src} className="card-front" alt="card frontside" />
                <img src={card_bg_path} className="card-back" alt="card backside" />
            </div>
        </div>
    )
}

export { SingleCard };