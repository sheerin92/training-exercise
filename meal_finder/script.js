const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');
let mealDB = [];

getRandomMeal();

// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // Clear single meal
    single_mealEl.innerHTML = '';

    // Get search term
    const term = search.value;

    // Check for empty
    if (term.trim()) {
        fetch((`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`))
            .then(res => res.json())
            .then(data => {
                console.log(data);
                mealDB = data.meals;
                resultHeading.innerHTML = `<h2>Search result for ${term}</h2>`;

                if (mealDB == null) {
                    resultHeading.innerHTML = `<h2>Invalid search term. Try Again!</h2>`
                }
                else {
                    mealsEl.innerHTML =  mealDB.map(meal =>
                        `
                    <div class='meal'>
                    <img src = "${meal.strMealThumb}" alt = "${meal.strMeal}"/>
                    <div class='meal-info' data-mealID = ${meal.idMeal}>
                    <h3>${meal.strMeal}</h3>
                    </div>
                    </div>
                    `
                    ).join('');
                }
            });
        //clear search text
        search.value = '';

    } else {
        alert('please enter a term');
    }
}

// Fetch meal by ID
function getMealById(mealID) {
    const selectedMeal = mealDB.find(meal => {
        return mealID == meal.idMeal
    })
    addMealToDOM(selectedMeal);
}

//Get random meal
function getRandomMeal(){

    //Clear the screen
    mealsEl.innerHTML = '';
    resultHeading.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0];
        addMealToDOM(meal);
    })
}

// Add meal to DOM
function addMealToDOM(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }

    single_mealEl.innerHTML = `
      <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="single-meal-info">
          ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
          ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
        </div>
        <div class="main">
          <p>${meal.strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
}

//Event Listener
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);
mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    });

    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        getMealById(mealID);
    }
});