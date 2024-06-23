document.addEventListener('DOMContentLoaded', () => {
  const addLinkForm = document.getElementById('add-link-form');
  const categorySelect = document.getElementById('link-category');
  
  let categories = JSON.parse(localStorage.getItem('categories')) || [];

  // Populate categories
  categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
  });

  addLinkForm.addEventListener('submit', (event) => {
      event.preventDefault();
      addLink();
  });
});

function addLink() {
  const name = document.getElementById('link-name').value;
  const url = document.getElementById('link-url').value;
  const category = document.getElementById('link-category').value;
  const favourite = document.getElementById('link-favourite').checked;

  let links = JSON.parse(localStorage.getItem('links')) || [];
  links.push({ name, url, category, favourite });
  localStorage.setItem('links', JSON.stringify(links));

  window.location.href = 'index.html';
}
