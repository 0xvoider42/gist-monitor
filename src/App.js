import './App.css';
import React, {useState} from 'react'
import { PIPEDRIVE_TOKEN } from './config.js'

function App() {

  const [names, setName] = useState([]);
  const user = '0xvoider42';
  const apiCall = 'gists';
  const gistStore = [];
  const gistNames = [];

  const gitCall = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/${apiCall}`);
    const data = await response.json();
    const gists = await data;
    for (const key in gists) {
      gistStore.push(gists[key].files);
    }

    gistStore.forEach(gist => {
      for(let key in gist) {
        gistNames.push(gist[key].filename);
      }
    })
    setName(gistNames)
  }

  const pipeDriveCall = async () => {
    const response = await fetch(`https://api.pipedrive.com/v1/globalMessages?api_token=${PIPEDRIVE_TOKEN}`)
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {names.map(name => <li>{name}</li>)}
        </div>
        <button className="getGists" onClick={gitCall}>Gists</button>
      </header>
    </div>
  );
}

export default App;
