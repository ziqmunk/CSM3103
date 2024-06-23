document.addEventListener('DOMContentLoaded', () => {
  const favouritesList = document.getElementById('favourites-list');
  const noFavMsg = document.getElementById('no-fav-msg');
  
  let links = JSON.parse(localStorage.getItem('links')) || [];
  let favourites = links.filter(link => link.favourite);

  if (favourites.length === 0) {
      noFavMsg.style.display = 'block';
  } else {
      noFavMsg.style.display = 'none';
      favourites.forEach((link, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <button onclick="window.location.href='${link.url}'">${link.name}</button>
              <button onclick="deleteFavourite(${index})">Remove from Favourites</button>
          `;
          favouritesList.appendChild(li);
      });
  }
});

function deleteFavourite(index) {
  let links = JSON.parse(localStorage.getItem('links'));
  let favourites = links.filter(link => link.favourite);
  const favouriteLink = favourites[index];
  const originalIndex = links.indexOf(favouriteLink);
  
  // Update the favourite status
  links[originalIndex].favourite = false;
  
  localStorage.setItem('links', JSON.stringify(links));
  location.reload();
}
