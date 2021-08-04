import React from 'react'

const Goals = props => {
    return (
        <ui>{
            props.goal.map((go) =>{
              return (<li>{go.text}</li>);
            })}
        </ui>


    );

};

export default Goals;