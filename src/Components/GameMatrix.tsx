import React from 'react';


interface GameMatrixProps {
    cards : { id: number; src: string;}[] ,
    turns : number
}



const GameMatrix: React.FC<GameMatrixProps> = ({cards, turns}) => {
    return (
        <div className="card-grid">
            {
                cards.map(card => (
                    
                    <div className="card" key={card.id}>
                            <div>
                                <img src={card.src} className="card-front" alt="card frontside" />
                                <img src="./assets/Card Background Skull Image.png" className="card-back" alt="card backside" />
                            </div>
                    </div>
                ))
            }
        </div>
    );
};

export {
    GameMatrix
};