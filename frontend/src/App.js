// Application Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';


// Components & Necessary Files 
import Company from './routes/Company';


// Main Application 
function App() {

  
  return( 
      <div
          className = 'app-container'
      >
        <h1> Jobly Application </h1>

      <Company />       
      </div>
  )
}

export default App;
