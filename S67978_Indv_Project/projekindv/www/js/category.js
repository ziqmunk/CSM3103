document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = document.getElementById('categories-list');
  
  let categories = JSON.parse(localStorage.getItem('categories')) || [];

  if (categories.length === 0) {
      const noCategoriesMsg = document.createElement('p');
      noCategoriesMsg.textContent = 'No categories were added';
      categoriesList.appendChild(noCategoriesMsg);
  } else {
      categories.forEach((category, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <button onclick="window.location.href='categoryLinks.html?category=${encodeURIComponent(category)}'">${category}</button>
              <button onclick="editCategory(${index})">Edit</button>
              <button onclick="deleteCategory(${index})">Delete</button>
          `;
          categoriesList.appendChild(li);
      });
  }
});

function editCategory(index) {
  window.location.href = `editCategory.html?index=${index}`;
}

function deleteCategory(index) {
  let categories = JSON.parse(localStorage.getItem('categories'));
  categories.splice(index, 1);
  localStorage.setItem('categories', JSON.stringify(categories));
  location.reload();
}
