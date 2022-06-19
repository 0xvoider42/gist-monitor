const pipedrive = require('pipedrive');
const client = pipedrive.ApiClient.instance;
client.authentications.api_key.apiKey = 'your pipedrive key'

const GIT_USER = '0xvoider42';
let arrayCheck;
let storage = [];
let nameArr = []
let descriptionArr = []
let urlArr = []

// Main function initiates calls to github API and run the logic
const gitCall = async() => {
  const response = await fetch(`https://api.github.com/users/${GIT_USER}/gists`);
  const data = await response.json();2
  console.log('gitCall!');

  // if statement checks if the gist local storage is the same as fetched data from github API
  // the data is the same
  if(arrayCheck == data.length){
    console.log('NO CHANGE: ', arrayCheck, data.length);
    if(storage.length == 0){

  // if the local storage is empty, it is populated by the fetched data
      data.forEach(element => storage.push(element.files));
    }

  // the data is not the same
  } else {
    console.log('CHANGE: ', arrayCheck, data.length);

  // compares current local storage to the newly fetched data
    if(arrayCheck > data.length) {
      arrayCheck = data.length;

  // resets the local storage to 0
      storage.length = 0;

  // populates local storage with the new data
      data.forEach(element => storage.push(element.files));
    } else if (arrayCheck < data.length) {
       arrayCheck = data.length;

  // resets the local storage to 0
       storage.length = 0;

  // populates local storage with the new data
       data.forEach(element => storage.push(element.files));
    } else {
      arrayCheck = data.length;
    }
  }

  // resets the local storage to 0
  nameArr.length = 0;

  // fetches the keys from the object and populates the local storage for names
  storage.forEach(element => nameArr.push(Object.keys(element)[0]));
  
  // resets the local storage to 0
  descriptionArr.length = 0;

  // fetches the keys from the object and populates the local storage for descriptions
  data.forEach(element => descriptionArr.push(element.description));

  // resets the local storage to 0
  urlArr.length = 0;

  // fetches the keys from the object and populates the local storage for gist URLs
  data.forEach(element => urlArr.push(element.html_url));

  console.log('Name: ', nameArr,'Description', descriptionArr,'URL', urlArr);

  // checks if gist names are not in the local storage
  if(nameArr.length != 0){

  // runs a loop to match gist name, description, and URL
    for(let i = 0; i < nameArr.length; i++){
  
  // uploads matched gist info to the pipedrive activity API
      addActivity(nameArr[i], descriptionArr[i], urlArr[i]);
      console.log('Activities have been created with the gists: ', nameArr.length)
    }
  
  // awaits for the population of local storage with gist names
  } else if (nameArr.length == 0) {
    console.log('Waiting to refresh the storage...');
  } else {
    console.log('something went wrong...', error);
  }
}

// instantiates the pipedrives addActivity function
  const addActivity = async (subject, description, url) => {
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

// sets interval calls to the gitCall function
setInterval(gitCall, 60 * 1000)