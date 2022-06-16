const pipedrive = require('pipedrive');

const client = pipedrive.ApiClient.instance;
client.authentications.api_key.apiKey = 'eaa383cda8865ec5eff3be3c7d9ed982dddb4bca';
const user = '0xvoider42';
const apiCall = 'gists';
let gistStore = [];
let gistNames = [];
let gistFileName;
let gistDescription = [];
let descriptionToString;
let gistURL = [];
let gistURLtoString;
let lastTime = 0;

const gitCall = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/${apiCall}`);
    const data = await response.json();
    const gists = await data;
    let newArr = gists.length;

    gists.forEach(gist => gistStore.push(gist.files));
    gists.forEach(gist => gistDescription.push(gist.description));
    gists.forEach(gist => gistURL.push(gist.html_url));
    gistStore.forEach(name => gistNames.push(Object.keys(name)));
    gistURLtoString = gistURL.toString().split(',');
    gistFileName = gistNames.toString().split(',');
    descriptionToString = gistDescription.toString().split(',');

    const checkGists = () => {
      if(gistStore.length === newArr.length){
        console.log("there are no new gists")
      }else {
        for(let i = 0; i< gistFileName.length; i++){
           addActivity(gistFileName[i], descriptionToString[i], gistURLtoString[i])
        }
      }
    }
    
    
    if(Math.floor((new Date() - lastTime)/60000) < 2) {
    } else {
      lastTime= new Date()
    }

    // checks for new Gists once every hour
    setInterval(checkGists, 10 * 1000)
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
