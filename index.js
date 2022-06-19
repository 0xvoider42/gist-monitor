const pipedrive = require('pipedrive');
const client = pipedrive.ApiClient.instance;
client.authentications.api_key.apiKey = 'your pipedrive key'

const GIT_USER = '0xvoider42';
let arrayCheck;
let storage = [];
let nameArr = []
let descriptionArr = []
let urlArr = []

const gitCall = async() => {
  const response = await fetch(`https://api.github.com/users/${GIT_USER}/gists`);
  const data = await response.json();
  console.log('gitCall!');

  if(arrayCheck == data.length){
    console.log('NO CHANGE: ', arrayCheck, data.length);
    if(storage.length == 0){
      data.forEach(element => storage.push(element.files));
    }
  } else {
    console.log('CHANGE: ', arrayCheck, data.length);
    if(arrayCheck > data.length) {
      arrayCheck = data.length;
      storage.length = 0;
      data.forEach(element => storage.push(element.files));
    } else if (arrayCheck < data.length) {
       arrayCheck = data.length;
       storage.length = 0;
       data.forEach(element => storage.push(element.files));
    } else {
      arrayCheck = data.length;
    }
  }

  nameArr.length = 0;
  storage.forEach(element => nameArr.push(Object.keys(element)[0]));
  descriptionArr.length = 0;
  data.forEach(element => descriptionArr.push(element.description));
  urlArr.length = 0;
  data.forEach(element => urlArr.push(element.html_url));

  console.log('Name: ', nameArr,'Description', descriptionArr,'URL', urlArr);

  if(nameArr.length != 0){
    for(let i = 0; i < nameArr.length; i++){
      addActivity(nameArr[i], descriptionArr[i], urlArr[i]);
      console.log('Activities have been created with the gists: ', nameArr.length)
    }
  } else if (nameArr.length == 0) {
    console.log('Waiting to refresh the storage...');
  } else {
    console.log('something went wrong...', error);
  }

  return console.log('Latest gists are:', nameArr, descriptionArr, urlArr)
}

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


setInterval(gitCall, 20 * 1000)