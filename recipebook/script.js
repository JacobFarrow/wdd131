const recipes = [
    {
        name: "Apple Crisp",
        image: "images/images/apple-crisp.jpg",
        tags: ["dessert"],
        rating: 4,
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    },
    {
        name: "Escalope de Poulet a la Creme",
        image: "images/images/Escalope de Poulet a la Creme.jpeg",
        tags: ["Chicken", "Entree"],
        rating: 3,
        description: "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully."
    }
];

const recipeContainer = document.querySelector('#recipe-container');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

function renderRecipes(recipeList) {
    const existingCards = document.querySelectorAll('.recipe-card');
    existingCards.forEach(card => card.remove());

    recipeList.forEach(recipe => {
        const article = document.createElement('article');
        article.className = 'recipe-card';

        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= recipe.rating ? '⭐' : '☆';
        }

        article.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                <h2>${recipe.name}</h2>
                <span class="rating">${stars}</span>
                <p class="description">${recipe.description}</p>
            </div>
        `;
        recipeContainer.appendChild(article);
    });
}

function init() {
    const randomRecipe = [recipes[Math.floor(Math.random() * recipes.length)]];
    renderRecipes(randomRecipe);
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );

    filtered.sort((a, b) => a.name.localeCompare(b.name));
    renderRecipes(filtered);
});

document.addEventListener('DOMContentLoaded', init);