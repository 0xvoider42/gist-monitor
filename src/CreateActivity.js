const pipedrive = require('pipedrive');

const client = pipedrive.ApiClient.instance;
client.authentications.api_key.apiKey = 'your pipedrive key goes here';
const user = '0xvoider42';
const apiCall = 'gists';
let gistStore = [];
let gistNames = [];
let gistFileName;
let gistDescription = [];
let descriptionToString;
let gistURL = [];
let gistURLtoString;

const gitCall = async () => {
  // fetches api endpoint
    const response = await fetch(`https://api.github.com/users/${user}/${apiCall}`);
    const data = await response.json();
    const gists = await data;

  // distilles general calls to the ones required to submit an activity
    gists.forEach(gist => gistStore.push(gist.files));
    gists.forEach(gist => gistDescription.push(gist.description));
    gists.forEach(gist => gistURL.push(gist.html_url));
    gistStore.forEach(name => gistNames.push(Object.keys(name)));
    gistURLtoString = gistURL.toString().split(',');
    gistFileName = gistNames.toString().split(',');
    descriptionToString = gistDescription.toString().split(',');

  // recursive call to submit new gists to the activities
    const checkGists = () => {
        for(let i = 0; i< gistFileName.length; i++){
           addActivity(gistFileName[i], descriptionToString[i], gistURLtoString[i])
        }
    }

    // checks for new Gists once every hour
    setInterval(checkGists, 60 * 60 * 1000)
  }


  async function addActivity(subject, description, url) {
    try{
      const api = new pipedrive.ActivitiesApi();
      const response = await api.addActivity({
        subject: subject,
        type: 'task',
        note: description,
        leadId: url
      });
      console.log(response)
    } catch(err) {
      const errorToLog = err.context?.body || err;
      console.log(errorToLog)
    }
  }

gitCall();
