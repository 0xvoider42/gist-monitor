const GIT_USER = '0xvoider42';
let arrayCheck;
let storage = [];

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
  console.log('FILES', storage);
}


setInterval(gitCall, 15 * 1000)

