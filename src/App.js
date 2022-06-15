import './App.css';
import React from 'react'

function App() {

  const user = '0xvoider42';
  const apiCall = 'gists';
  const gistStore = [];

  const gitCall = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/${apiCall}`);
    const data = await response.json();
    const gists = await data;
    for (const key in gists) {
      gistStore.push(gists[key].files);
    }
    console.log(gistStore)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="getGists" onClick={gitCall}>Gists</button>
      </header>
    </div>
  );
}

export default App;
