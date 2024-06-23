document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-category-form');
  
  form.addEventListener('submit', event => {
      event.preventDefault();
      
      const categoryName = document.getElementById('category-name').value;
      
      let categories = JSON.parse(localStorage.getItem('categories')) || [];
      categories.push(categoryName);
      
      localStorage.setItem('categories', JSON.stringify(categories));
      
      window.location.href = 'category.html';
  });
});
