import React, { useEffect, useState } from 'react';
import './Cards.css'

const Cards = () => {
    const [openCard, setOpenCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [cards, setCards] = useState([
        {
            id: 1,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.480.480.png?c=2'
        },
        {
            id: 2,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/925/3C__99122.1440113509.480.480.png?c=2'
        },
        {
            id: 3,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.480.480.png?c=2'
        },
        {
            id: 4,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/927/5S__90574.1440113521.480.480.png?c=2'
        },
        {
            id: 5,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/928/6D__92916.1440113530.480.480.png?c=2'
        },
        {
            id: 6,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/934/QD__14920.1440113588.480.480.png?c=2'
        },
        {
            id: 7,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/923/JC__86231.1440113428.480.480.png?c=2'
        },
        {
            id: 8,
            srcCard: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/935/AS__68652.1440113599.480.480.png?c=2'
        }
    ])

   
    const pairCards = [...cards, ...cards];

    useEffect(() => {
        let firstMatchCard = pairCards[openCard[0]]
        let secondMatchCard = pairCards[openCard[1]]
       
        if (secondMatchCard && firstMatchCard.id === secondMatchCard.id) {
            setMatched([...matched, firstMatchCard.id]);
          }
          if (openCard.length === 2) setTimeout(() => setOpenCard([]), 1000);
         
    }, [openCard])
    const handleFlip = (index) => {
        setOpenCard((opened) => [...opened, index])
    }

    return (
        <>
            {pairCards.map((item, index) => {
                let flipped = false
                if (openCard.includes(index)) flipped = true;
                if (matched.includes(item.id)) flipped = true;
                return (
                    <div className={`card ${flipped ? 'flipped' : ''}`}
                         onClick={() => handleFlip(index)}
                    >
                        <div className="inner">
                            <div className="front">
                                <img src={item.srcCard} />
                            </div>
                            <div className="back">
                                <img src="https://i.pinimg.com/originals/19/11/5a/19115a6436f9fda0b17261461d1fa606.jpg"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Cards