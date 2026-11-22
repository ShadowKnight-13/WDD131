const recipes = [
    {
        tags: ['Waffles', 'Sweet Potato', 'Side'],
        description: 'Savory waffles made with Sweet potato with a hint of Ginger',
        image: './images/sweet-potato-waffle-md.jpg',
        name: 'Sweet Potato Waffles',
        rating: 4
    },
    {
        tags: ['Chicken', 'Entree'],
        description:
            'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
        image: './images/escalopes-de-poulet-a-la-creme.webp',
        name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
        rating: 4.5
    },
    {
        tags: ['Potatoes', 'side'],
        description:
            'Easy and delicious oven roasted potatoes that go great with almost anything.',
        image: './images/roasted-potatoes.webp',
        name: 'Oven Roasted potato slices',
        rating: 4
    },
    {
        tags: ['Southwest', 'entree'],
        description:
            'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
        image: './images/black-beans-and-rice.jpg',
        name: 'Black Beans and Rice',
        rating: 3
    },
    {
        tags: ['chicken', 'entree', 'Indian'],
        description:
            'Quick and easy Chicken curry recipe made with easy to find ingredients.',
        image: './images/chicken-curry.webp',
        name: 'Chicken Curry',
        rating: 5
    },
    {
        tags: ['dessert'],
        description: 'Delicious soft chocolate chip cookies with coconut.',
        image: './images/chocolate-chip-cookies.jpg',
        name: 'Chocolate Chip Cookies',
        rating: 5
    },
    {
        tags: ['dessert', 'German'],
        description:
            "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. A must have recipe for gooseberry lovers!!",
        image: './images/german-gooseberry-cake.jpg',
        name: 'Gooseberry cake with vanilla cream and crumble',
        rating: 5
    },
    {
        tags: ['dessert'],
        description:
            "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        image: './images/apple-crisp.jpg',
        name: 'Apple Crisp',
        rating: 4
    }
];

const recipeList = document.querySelector('.recipes');
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#recipe-search');
const resultsStatus = document.querySelector('.results-status');

function tagsTemplate(tags) {
    return tags
        .map((tag) => `<span class="recipe-tag">${tag}</span>`)
        .join('');
}

function ratingTemplate(rating) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < Math.floor(rating);
        const star = isFilled ? '★' : '☆';
        const className = isFilled ? 'icon-star' : 'icon-star-empty';
        return `<span aria-hidden="true" class="${className}">${star}</span>`;
    }).join('');

    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</span>`;
}

function recipeTemplate(recipe) {
    return `
        <article class="recipe">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}" width="750" height="563">
            <div class="recipe-details">
                <div class="recipe-tags">${tagsTemplate(recipe.tags)}</div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </article>
    `;
}

function renderRecipes(recipeResults) {
    recipeList.innerHTML = recipeResults.length
        ? recipeResults.map(recipeTemplate).join('')
        : '<p class="no-results">No recipes matched your search.</p>';
}

function randomRecipe(recipeSet) {
    return recipeSet[Math.floor(Math.random() * recipeSet.length)];
}

function sortByName(recipeA, recipeB) {
    return recipeA.name.localeCompare(recipeB.name, undefined, {
        sensitivity: 'base'
    });
}

function matchesSearch(recipe, keywords) {
    const searchableText = [
        recipe.name,
        recipe.description,
        ...recipe.tags
    ].join(' ').toLowerCase();

    return keywords.every((keyword) => searchableText.includes(keyword));
}

function searchHandler(event) {
    event.preventDefault();

    const keywords = searchInput.value
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
    const filteredRecipes = recipes
        .filter((recipe) => matchesSearch(recipe, keywords))
        .sort(sortByName);

    renderRecipes(filteredRecipes);
    resultsStatus.textContent = `${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? '' : 's'} found.`;
}

searchForm.addEventListener('submit', searchHandler);
renderRecipes([randomRecipe(recipes)]);
