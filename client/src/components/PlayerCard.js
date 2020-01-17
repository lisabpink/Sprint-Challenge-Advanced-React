import React from 'react';

export const PlayerCard = ({name, country}) => {
    return (
       
        <div className="cards">
            <h4>Name: {name} </h4>
            <p>Country: {country} </p>
         </div>
    
    )
} 