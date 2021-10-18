import * as React from "react";
import Trending from "../../src/components/trending/Trending";

export default function Index() {
    let cards = [
        {
            name: 'Clock',
            likes: 1234,
            mediaUrl: '/images/nft.jpg',
            user: {
                verified: true,
                avatarUrl: '/images/avatar.png'
            },
            price: '33.7',
            currency: 'BTC',
            timeLeft: 13345,
        },

    ]
    return (
        <div>
            <Trending cards={cards} />
        </div>
    )
}