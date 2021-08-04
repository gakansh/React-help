import React from 'react'

const Newhandle = prop => {


    const eventHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: (Math.random()).toString(),
            text: "Hi eee"
        };
        prop.nh(newGoal);


    };
    return <button onClick={eventHandler}>Button</button>;

};
export default Newhandle;