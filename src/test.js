const pipedrive = require('pipedrive');

const client = pipedrive.ApiClient.instance;
// let apiToken = client.authentications.api_Key;
  client.authentications.api_key.apiKey = 'eaa383cda8865ec5eff3be3c7d9ed982dddb4bca';

  const user = '0xvoider42';
  const apiCall = 'gists';
  const gistStore = [];
  const gistNames = [];
  const url = `https://api.pipedrive.com/v1/globalMessages?api_token=eaa383cda8865ec5eff3be3c7d9ed982dddb4bca`


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
    gistNames.map(name => console.log(name))
  }

  async function addActivity() {
    try{
      const api = new pipedrive.ActivitiesApi();
      const response = await api.addActivity({
        subject: 'test for the tests sake',
        type: 'football'
      });
      console.log(response)
    } catch(err) {
      const errorToLog = err.context?.body || err;
      console.log(errorToLog)
    }
  }

  addActivity();

// async function postGists(url = '', data = []) {
//     const response = await fetch(url, { 
//       method: 'POST',
//       headers: {
//       'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     return response.json()
//   }

// postGists(url, test).then(data =>
//     {console.log(data)})