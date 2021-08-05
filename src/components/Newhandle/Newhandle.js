import React, { useState } from 'react'

const Newhandle = prop => {

    const [uptext , setText] = useState('');

    const eventHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: (Math.random()).toString(),
            text: uptext
        };

        setText('');

        prop.nh(newGoal);


    };

    const updatedata = event => {
        setText(event.target.value);
    };


    return <form onSubmit={eventHandler}>

        <input type='text' value={uptext} onChange={updatedata} />
        <button type='submit'>submit</button>;
    </form>
};
export default Newhandle;