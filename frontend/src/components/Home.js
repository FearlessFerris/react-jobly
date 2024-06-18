// Home Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';


// Components & Necessary Files 


// Home Component 
function Home() {

    return(
        <div 
            className = 'home-container'
            style = {{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#263238',
                color: '#00bcd4',
            }}
        >
        <h1> Jobly Application </h1>
        </div>
    )
}

export default Home;