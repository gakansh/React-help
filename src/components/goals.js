import React from 'react'
import './Nstyle.css'
const Goals = props => {
    return (
        <ui class="uistyle">{
            props.goal.map((go) =>{
              return (<li>{go.text}</li>);
            })}
        </ui>


    );

};

export default Goals;