import React from 'react';
import Featured from "../../src/components/featured/Featured";
import CollectorColumn from "../../src/components/collectors/CollectorColumn";
import TopCollectors from "../../src/components/collectors/TopCollectors";

const Index = props => {
    const steps = [
        {
            title: "step 1 title",
            description: "step 1 description",
        },
        {
            title: "step 2 title",
            description: "step 2 description",
        },
        {
            title: "step 3 title",
            description: "step 4 description",
        }
    ]

    const how = {
        title: ' 1 title',
        description: ' 1 description',
        link: 'localhost',
        items: steps
    }
    //
    // const items = [
    //     {
    //         image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    //         title: "tomatoes",
    //         rows: 2,
    //         cols: 3,
    //         href: "/tomatoes"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    //         title: "star",
    //         href: "/star"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //         title: "bike",
    //         href: "/bike"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //         title: "bike",
    //         href: "/bike"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //         title: "bike",
    //         href: "/bike"
    //     },
    // ]

    const items = [
        { //0
            name: 'asen',
            nftsCount: 123,
            avatar: 'peshyu',
            verified: true,
            id: 142
        },
        {
            name: 'asen',
            nftsCount: 123,
            avatar: 'peshyu',
            verified: true,
            id: 142
        },
        { // 2
            name: 'asen',
            nftsCount: 123,
            avatar: 'peshyu',
            verified: true,
            id: 142
        },
        {
            name: 'asen',
            nftsCount: 123,
            avatar: 'peshyu',
            verified: true,
            id: 142
        }
    ]

    let collectors = [
        {
            name: 'asen 1',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 2',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 3',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 4',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 5',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
    ]

    return (
        <div>
            {/*<CollectorColumn items={items}/>*/}
            {/*<Featured items={items}/>*/}
            {/*<Featured {...items}/>*/}
            <TopCollectors collectors={collectors}/>
        </div>
        // <How {...how} />
    );
};

Index.propTypes = {

};

export default Index;