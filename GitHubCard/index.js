/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/itava0")
.then(res => {
  console.log(res.data);
  let items = res.data
  console.log(items.avatar_url);
  let newGithubCard = githubCard (items);
   cards.appendChild(newGithubCard);
}) 
.catch(err => {
  console.log("The data was not returned", err);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [ 
//   {
//   "login": "BaoPham92",
//   "id": 26471655,
//   "node_id": "MDQ6VXNlcjI2NDcxNjU1",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/26471655?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/BaoPham92",
//   "html_url": "https://github.com/BaoPham92",
//   "followers_url": "https://api.github.com/users/BaoPham92/followers",
//   "following_url": "https://api.github.com/users/BaoPham92/following{/other_user}",
//   "gists_url": "https://api.github.com/users/BaoPham92/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/BaoPham92/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/BaoPham92/subscriptions",
//   "organizations_url": "https://api.github.com/users/BaoPham92/orgs",
//   "repos_url": "https://api.github.com/users/BaoPham92/repos",
//   "events_url": "https://api.github.com/users/BaoPham92/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/BaoPham92/received_events",
//   "type": "User",
//   "site_admin": false
// },
//   {
//   "login": "nicolepdev",
//   "id": 35229841,
//   "node_id": "MDQ6VXNlcjM1MjI5ODQx",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/35229841?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/nicolepdev",
//   "html_url": "https://github.com/nicolepdev",
//   "followers_url": "https://api.github.com/users/nicolepdev/followers",
//   "following_url": "https://api.github.com/users/nicolepdev/following{/other_user}",
//   "gists_url": "https://api.github.com/users/nicolepdev/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/nicolepdev/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/nicolepdev/subscriptions",
//   "organizations_url": "https://api.github.com/users/nicolepdev/orgs",
//   "repos_url": "https://api.github.com/users/nicolepdev/repos",
//   "events_url": "https://api.github.com/users/nicolepdev/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/nicolepdev/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "StanleyOned",
//   "id": 6315252,
//   "node_id": "MDQ6VXNlcjYzMTUyNTI=",
//   "avatar_url": "https://avatars2.githubusercontent.com/u/6315252?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/StanleyOned",
//   "html_url": "https://github.com/StanleyOned",
//   "followers_url": "https://api.github.com/users/StanleyOned/followers",
//   "following_url": "https://api.github.com/users/StanleyOned/following{/other_user}",
//   "gists_url": "https://api.github.com/users/StanleyOned/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/StanleyOned/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/StanleyOned/subscriptions",
//   "organizations_url": "https://api.github.com/users/StanleyOned/orgs",
//   "repos_url": "https://api.github.com/users/StanleyOned/repos",
//   "events_url": "https://api.github.com/users/StanleyOned/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/StanleyOned/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "chelsabeth",
//   "id": 23201598,
//   "node_id": "MDQ6VXNlcjIzMjAxNTk4",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/23201598?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/chelsabeth",
//   "html_url": "https://github.com/chelsabeth",
//   "followers_url": "https://api.github.com/users/chelsabeth/followers",
//   "following_url": "https://api.github.com/users/chelsabeth/following{/other_user}",
//   "gists_url": "https://api.github.com/users/chelsabeth/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/chelsabeth/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/chelsabeth/subscriptions",
//   "organizations_url": "https://api.github.com/users/chelsabeth/orgs",
//   "repos_url": "https://api.github.com/users/chelsabeth/repos",
//   "events_url": "https://api.github.com/users/chelsabeth/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/chelsabeth/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "Wais-A",
//   "id": 12667453,
//   "node_id": "MDQ6VXNlcjEyNjY3NDUz",
//   "avatar_url": "https://avatars2.githubusercontent.com/u/12667453?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Wais-A",
//   "html_url": "https://github.com/Wais-A",
//   "followers_url": "https://api.github.com/users/Wais-A/followers",
//   "following_url": "https://api.github.com/users/Wais-A/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Wais-A/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Wais-A/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Wais-A/subscriptions",
//   "organizations_url": "https://api.github.com/users/Wais-A/orgs",
//   "repos_url": "https://api.github.com/users/Wais-A/repos",
//   "events_url": "https://api.github.com/users/Wais-A/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Wais-A/received_events",
//   "type": "User",
//   "site_admin": false
// }
// ];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cards = document.querySelector('.cards');

function githubCard (items) {
  //Created the Elements for the component
  const 
      card = document.createElement('div'),
      img = document.createElement('img'),
      cardInfo = document.createElement('div'),
      h3Name = document.createElement('h3'),
      pUsername = document.createElement('p'),
      pLocation = document.createElement('p'),
      pProfile = document.createElement('p'),
      aGithubUrl = document.createElement('a'),
      pFollowers = document.createElement('p'),
      pFollowing = document.createElement('p'),
      pBio = document.createElement('p');

  //Set up the Class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3Name.classList.add('name');
  pUsername.classList.add('username');

  //Set up for the text content
  img.setAttribute('src', items.avatar_url);
  h3Name.textContent = items.name;
  pUsername.textContent = items.login;
  pLocation.textContent = `Location: ${items.location}`;
  aGithubUrl.href = items.html_url;
  aGithubUrl.textContent = `Profile: ${items.html_url}`;
  pFollowers.textContent = `Followers: ${items.followers}`;
  pFollowing.textContent = `Following: ${items.following}`;
  pBio.textContent = `Bio: ${items.bio}`;

  //Append the child to the parent element
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(pUsername);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  pProfile.appendChild(aGithubUrl);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);

  return card;
}


const myfollowers = ["BaoPham92", "nicolepdev", "StanleyOned", "chelsabeth", "Wais-A", "dustinmyers"]; 

myfollowers.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    let friends = res.data;
    let newFriends = githubCard(friends);
     cards.appendChild(newFriends);
  }) 
   .catch (error => {
     console.log("this is an error", error)
   })
});


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
