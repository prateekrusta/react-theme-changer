import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './darkMode.css';
import './App.css';
import CustomizedSwitches from './button'

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header className={`App-header ${theme}`}>
        <img src={logo} className="App-logo" alt="logo" />

        <p onClick={toggleTheme}>
          <CustomizedSwitches />
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
