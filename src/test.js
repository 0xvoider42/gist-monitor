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

  gitCall()