const data = [
  {
    url: 'https://api.github.com/gists/e715950185f0fcee860a5dab586f958e',
    forks_url: 'https://api.github.com/gists/e715950185f0fcee860a5dab586f958e/forks',
    commits_url: 'https://api.github.com/gists/e715950185f0fcee860a5dab586f958e/commits',
    id: 'e715950185f0fcee860a5dab586f958e',
    node_id: 'G_kwDOBG3NetoAIGU3MTU5NTAxODVmMGZjZWU4NjBhNWRhYjU4NmY5NThl',
    git_pull_url: 'https://gist.github.com/e715950185f0fcee860a5dab586f958e.git',
    git_push_url: 'https://gist.github.com/e715950185f0fcee860a5dab586f958e.git',
    html_url: 'https://gist.github.com/e715950185f0fcee860a5dab586f958e',
    files: { Facts2: [Object] },
    public: true,
    created_at: '2022-06-15T15:26:45Z',
    updated_at: '2022-06-15T15:27:07Z',
    description: 'random facts',
    comments: 0,
    user: null,
    comments_url: 'https://api.github.com/gists/e715950185f0fcee860a5dab586f958e/comments',
    owner: {
      login: '0xvoider42',
      id: 74304890,
      node_id: 'MDQ6VXNlcjc0MzA0ODkw',
      avatar_url: 'https://avatars.githubusercontent.com/u/74304890?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/0xvoider42',
      html_url: 'https://github.com/0xvoider42',
      followers_url: 'https://api.github.com/users/0xvoider42/followers',
      following_url: 'https://api.github.com/users/0xvoider42/following{/other_user}',
      gists_url: 'https://api.github.com/users/0xvoider42/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/0xvoider42/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/0xvoider42/subscriptions',
      organizations_url: 'https://api.github.com/users/0xvoider42/orgs',
      repos_url: 'https://api.github.com/users/0xvoider42/repos',
      events_url: 'https://api.github.com/users/0xvoider42/events{/privacy}',
      received_events_url: 'https://api.github.com/users/0xvoider42/received_events',
      type: 'User',
      site_admin: false
    },
    truncated: false
  },
  {
    url: 'https://api.github.com/gists/e630bae6736003e16cfdabe95eb2eb3f',
    forks_url: 'https://api.github.com/gists/e630bae6736003e16cfdabe95eb2eb3f/forks',
    commits_url: 'https://api.github.com/gists/e630bae6736003e16cfdabe95eb2eb3f/commits',
    id: 'e630bae6736003e16cfdabe95eb2eb3f',
    node_id: 'G_kwDOBG3NetoAIGU2MzBiYWU2NzM2MDAzZTE2Y2ZkYWJlOTVlYjJlYjNm',
    git_pull_url: 'https://gist.github.com/e630bae6736003e16cfdabe95eb2eb3f.git',
    git_push_url: 'https://gist.github.com/e630bae6736003e16cfdabe95eb2eb3f.git',
    html_url: 'https://gist.github.com/e630bae6736003e16cfdabe95eb2eb3f',
    files: { Facts: [Object] },
    public: true,
    created_at: '2022-06-15T14:34:15Z',
    updated_at: '2022-06-15T15:40:09Z',
    description: 'test for pipedrive',
    comments: 0,
    user: null,
    comments_url: 'https://api.github.com/gists/e630bae6736003e16cfdabe95eb2eb3f/comments',
    owner: {
      login: '0xvoider42',
      id: 74304890,
      node_id: 'MDQ6VXNlcjc0MzA0ODkw',
      avatar_url: 'https://avatars.githubusercontent.com/u/74304890?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/0xvoider42',
      html_url: 'https://github.com/0xvoider42',
      followers_url: 'https://api.github.com/users/0xvoider42/followers',
      following_url: 'https://api.github.com/users/0xvoider42/following{/other_user}',
      gists_url: 'https://api.github.com/users/0xvoider42/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/0xvoider42/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/0xvoider42/subscriptions',
      organizations_url: 'https://api.github.com/users/0xvoider42/orgs',
      repos_url: 'https://api.github.com/users/0xvoider42/repos',
      events_url: 'https://api.github.com/users/0xvoider42/events{/privacy}',
      received_events_url: 'https://api.github.com/users/0xvoider42/received_events',
      type: 'User',
      site_admin: false
    },
    truncated: false
  }
]

let storage = [];
console.log('STORAGE 1',storage);

data.forEach(element => storage.push(element.files));

console.log('STORAGE 2', storage);
storage.length = 0;
console.log('STORAGE 3', storage);
data.forEach(element => storage.push(element.files));

console.log('STORAGE 4', storage);
