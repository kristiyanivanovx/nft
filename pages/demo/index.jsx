import * as React from "react";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions";
import Footer from "../../src/components/footer/Footer";

export default function Index() {
    const cards = [
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
    ];

    const auctCards = [
        {
            name: 'Clock',
            user: {
                verified: true,
                avatarUrl: '/images/avatar.png'
            },
            mediaUrl: '/images/nft.jpg',
            price: '33.7',
            currency: 'BTC',
            timeLeft: 13345,
        },
        {
            name: 'Clock',
            user: {
                verified: true,
                avatarUrl: '/images/avatar.png'
            },
            mediaUrl: '/images/nft.jpg',
            price: '33.7',
            currency: 'BTC',
            timeLeft: 13345,
        },
        {
            name: 'Clock',
            user: {
                verified: true,
                avatarUrl: '/images/avatar.png'
            },
            mediaUrl: '/images/nft.jpg',
            price: '33.7',
            currency: 'BTC',
            timeLeft: 13345,
        },
    ];

    return (
        <div>
            {/*<Trending cards={cards} />*/}
            {/*<Auctions cards={auctCards} />*/}
            <Footer/>
        </div>
    )
}