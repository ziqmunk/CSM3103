document.addEventListener('DOMContentLoaded', () => {
  displayLinks();
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', searchLinks);
});

function displayLinks(filteredLinks = null) {
  const linksList = document.getElementById('links-list');
  const noLinksMsg = document.getElementById('no-links-msg');
  linksList.innerHTML = '';

  let links = JSON.parse(localStorage.getItem('links')) || [];
  if (filteredLinks !== null) {
      links = filteredLinks;
  }

  if (links.length === 0) {
      noLinksMsg.style.display = 'block';
  } else {
      noLinksMsg.style.display = 'none';
      links.forEach((link, index) => {
          const li = document.createElement('li');

          // Create buttons with appropriate classes for styling
          const linkButton = document.createElement('button');
          linkButton.textContent = link.name;
          linkButton.className = 'link-button';
          linkButton.onclick = () => window.location.href = link.url;

          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.className = 'edit-button';
          editButton.onclick = () => showEditLinkForm(index);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'delete-button';
          deleteButton.onclick = () => deleteLink(index);

          // Append buttons to the list item
          li.appendChild(linkButton);
          li.appendChild(editButton);
          li.appendChild(deleteButton);

          // Append list item to the links list
          linksList.appendChild(li);
      });
  }
}


function searchLinks() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  let links = JSON.parse(localStorage.getItem('links')) || [];
  const filteredLinks = links.filter(link => link.name.toLowerCase().includes(searchInput));
  displayLinks(filteredLinks);
}

function showEditLinkForm(index) {
  const links = JSON.parse(localStorage.getItem('links'));
  const link = links[index];

  // Construct the edit link URL with query parameters
  const editLinkUrl = `editLink.html?index=${index}`;

  // Redirect to the editLink.html page
  window.location.href = editLinkUrl;
}



function saveLink(index) {
  const name = document.getElementById('edit-link-name').value;
  const url = document.getElementById('edit-link-url').value;
  const category = document.getElementById('edit-link-category').value;
  const favourite = document.getElementById('edit-link-favourite').checked;

  let links = JSON.parse(localStorage.getItem('links'));
  links[index] = { name, url, category, favourite };
  localStorage.setItem('links', JSON.stringify(links));

  location.reload();
}

function cancelEditLink() {
  document.getElementById('edit-link-form').remove();
}

function deleteLink(index) {
  let links = JSON.parse(localStorage.getItem('links'));
  links.splice(index, 1);
  localStorage.setItem('links', JSON.stringify(links));
  location.reload();
}
