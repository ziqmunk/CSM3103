document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get('index');
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const category = categories[index];

  if (category) {
      document.getElementById('edit-category-name').value = category;
  }

  document.getElementById('edit-category-form').addEventListener('submit', (event) => {
      event.preventDefault();
      saveCategory(index);
  });
});

function saveCategory(index) {
  const categoryName = document.getElementById('edit-category-name').value;
  
  let categories = JSON.parse(localStorage.getItem('categories')) || [];
  categories[index] = categoryName;
  localStorage.setItem('categories', JSON.stringify(categories));
  
  window.location.href = 'category.html';
}
