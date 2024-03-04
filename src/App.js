//import logo from './logo.svg';
import Navbar from './components/navbar';
import Main from './components/main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
