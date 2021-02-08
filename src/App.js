import React from 'react';
import Header from './Header';
import Navbar from './Navbar';


//membuat component pake const

function App() {
  return (
    <div className="App">    
      <Navbar/>
      <Header/> 
      <h2> hello world</h2>
    </div>
  );
}

export default App;
