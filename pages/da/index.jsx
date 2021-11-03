import React from 'react';
import PropTypes from 'prop-types';
import How from "../../src/components/how/How";



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

    return (
        <How {...how} />
    );
};

Index.propTypes = {

};

export default Index;