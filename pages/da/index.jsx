import React from 'react';
import TopCollectors from "../../src/components/collectors/TopCollectors";
import Head from 'next/head'

const Index = props => {
    // const steps = [
    //     {
    //         title: "step 1 title",
    //         description: "step 1 description",
    //     },
    //     {
    //         title: "step 2 title",
    //         description: "step 2 description",
    //     },
    //     {
    //         title: "step 3 title",
    //         description: "step 4 description",
    //     }
    // ]

    // const how = {
    //     title: ' 1 title',
    //     description: ' 1 description',
    //     link: 'localhost',
    //     items: steps
    // }

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
        {
            name: 'asen 6',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 7',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 8',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 9',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
        {
            name: 'asen 10',
            nftsCount: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6g1LiGfSUXH89e_5Q8SwrZu6n-4nDFMtAy5R2PzDRVH80Qi93tEa5NvKZi1KN42nuhE&usqp=CAU',
            verified: true,
        },
    ]


        return (
            <div>
                {/*<Head>*/}
                {/*    <title></title>*/}
                {/*</Head>*/}
                {/*<CollectorColumn items={items}/>*/}
                {/*<Featured items={items}/>*/}
                {/*<Featured {...items}/>*/}
                {/*<How {...how} />*/}
                <TopCollectors collectors={collectors}/>
            </div>
    );
};

Index.propTypes = {

};

export default Index;