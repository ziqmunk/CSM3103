document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const categoryTitle = document.getElementById('category-title');
  const categoryLinksList = document.getElementById('category-links-list');
  
  categoryTitle.textContent = category;

  let links = JSON.parse(localStorage.getItem('links')) || [];
  let categoryLinks = links.filter(link => link.category === category);

  if (categoryLinks.length === 0) {
      const noLinksMsg = document.createElement('p');
      noLinksMsg.textContent = 'No links in this category';
      categoryLinksList.appendChild(noLinksMsg);
  } else {
      categoryLinks.forEach((link) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <button onclick="window.location.href='${link.url}'">${link.name}</button>
          `;
          categoryLinksList.appendChild(li);
      });
  }
});
