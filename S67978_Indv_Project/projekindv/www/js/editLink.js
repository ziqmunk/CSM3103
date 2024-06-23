document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get('index');
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const link = links[index];

  if (link) {
      document.getElementById('edit-link-name').value = link.name;
      document.getElementById('edit-link-url').value = link.url;
      document.getElementById('edit-link-favourite').checked = link.favourite;
  }

  const categorySelect = document.getElementById('edit-link-category');
  categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      if (link && link.category === category) {
          option.selected = true;
      }
      categorySelect.appendChild(option);
  });

  document.getElementById('edit-link-form').addEventListener('submit', (event) => {
      event.preventDefault();
      saveLink(index);
  });
});

function saveLink(index) {
  const name = document.getElementById('edit-link-name').value;
  const url = document.getElementById('edit-link-url').value;
  const category = document.getElementById('edit-link-category').value;
  const favourite = document.getElementById('edit-link-favourite').checked;

  let links = JSON.parse(localStorage.getItem('links')) || [];
  links[index] = { name, url, category, favourite };
  localStorage.setItem('links', JSON.stringify(links));

  window.location.href = 'index.html';
}
