/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
 axios.get("https://api.github.com/users/itava0")
  .then(res => {
    console.log(res);
  });

  // axios
  // .get("https://dog.ceo/api/breed/mastiff/images/random/12")
  // .then(response => {
  //   console.log(response);
  //   response.data.message.forEach(item => {
  //     const newDog = DogCard(item);
  //     entryPoint.appendChild(newDog);
  //   });
  // })
  // .catch(error => {
  //   console.log("The data was not returned", error);
  // });
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

const followersArray = [];

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

function githubCard (name, username, userImg, location, ProfileUrl, followers, following, bio) {
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
  img.src = userImg;
  h3Name.textContent = name;
  pUsername.textContent = username;
  pLocation.textContent = location;
  aGithubUrl.href = ProfileUrl;
  aGithubUrl.textContent = ProfileUrl;
  pFollowers.textContent = followers;
  pFollowing.textContent = following;
  pBio.textContent = bio;

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
