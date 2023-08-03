import logo from './logo.svg';
import './App.css';

function App() {
  function callMe() {
    fetch('http://localhost:3001/api/auth', {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log)
      .catch((err) => {
        console.log(err);
      });
    // .then(data => console.log(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={callMe}>Call Saul!</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
