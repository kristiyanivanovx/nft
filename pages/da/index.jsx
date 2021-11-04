import React from 'react';
import Featured from "../../src/components/featured/Featured";

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

    const items = [
        {
            image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
            title: "tomatoes",
            rows: 2,
            cols: 3,
            href: "/tomatoes"
        },
        {
            image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
            title: "star",
            href: "/star"
        },
        {
            image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
            title: "bike",
            href: "/bike"
        },
        {
            image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
            title: "bike",
            href: "/bike"
        },
        {
            image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
            title: "bike",
            href: "/bike"
        },
    ]
    return (
        <div>
            123
            <Featured items={items}/>
            {/*<Featured {...items}/>*/}

        </div>
        // <How {...how} />
    );
};

Index.propTypes = {

};

export default Index;