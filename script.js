const recipes = [
    {
        name: "Butter Chicken",
        image: "butter_chicken.jpg",
        ingredients: ["500g Chicken", "2 Tomatoes", "1 Onion", "100ml Cream", "2 tbsp Butter", "Spices"],
        instructions: [
            "Marinate chicken with yogurt and spices for 1 hour.",
            "Cook the chicken until golden brown.",
            "Blend tomatoes and onions into a puree.",
            "Cook the puree with butter and spices.",
            "Add cream and mix in the cooked chicken.",
            "Simmer for 10 minutes and serve hot."
        ]
    },
    {
        name: "Paneer Tikka",
        image: "paneer_tikka.jpg",
        ingredients: ["200g Paneer", "1 Cup Yogurt", "1 Bell Pepper", "1 Onion", "Spices"],
        instructions: [
            "Cut paneer, bell pepper, and onion into cubes.",
            "Marinate with yogurt and spices for 30 minutes.",
            "Grill or cook on a pan until golden brown.",
            "Serve with mint chutney."
        ]
    },
    {
        name: "Masala Dosa",
        image: "masala_dosa.jpg",
        ingredients: ["1 Cup Rice", "1/2 Cup Urad Dal", "2 Potatoes", "1 Onion", "Spices"],
        instructions: [
            "Soak and grind rice and urad dal into a batter.",
            "Ferment overnight.",
            "Cook mashed potatoes with spices.",
            "Spread dosa batter on a hot pan.",
            "Add potato masala inside and fold.",
            "Serve with coconut chutney."
        ]
    },
    {
        name: "Biryani",
        image: "biryani.jpg",
        ingredients: ["2 Cups Basmati Rice", "500g Chicken", "2 Tomatoes", "2 Onions", "Spices"],
        instructions: [
            "Cook rice separately and keep aside.",
            "Fry onions and add tomatoes, chicken, and spices.",
            "Layer rice and chicken mixture in a pot.",
            "Cook on low heat for 20 minutes.",
            "Garnish with coriander and serve."
        ]
    },
    {
        name: "Chole Bhature",
        image: "chole_bhature.jpg",
        ingredients: ["1 Cup Chickpeas", "2 Tomatoes", "1 Onion", "Flour", "Spices"],
        instructions: [
            "Soak and boil chickpeas.",
            "Cook with onion, tomatoes, and spices.",
            "Make a dough with flour and roll into Bhature.",
            "Deep fry until golden and serve hot."
        ]
    },
    {
        name: "Pav Bhaji",
        image: "pav_bhaji.jpg",
        ingredients: ["4 Potatoes", "1 Cup Mixed Vegetables", "1 Tomato", "1 Onion", "Pav Bread"],
        instructions: [
            "Boil and mash vegetables.",
            "Cook with onions, tomatoes, and spices.",
            "Serve hot with buttered Pav bread."
        ]
    }
];

const recipeList = document.getElementById("recipe-list");
const recipeDetails = document.getElementById("recipe-details");
const recipeImage = document.getElementById("recipe-image");
const recipeTitle = document.getElementById("recipe-title");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeInstructions = document.getElementById("recipe-instructions");
const backButton = document.getElementById("back-btn");

// Display Recipe List
recipes.forEach((recipe, index) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
    `;
    recipeCard.addEventListener("click", () => showRecipeDetails(index));
    recipeList.appendChild(recipeCard);
});

// Show Recipe Details
function showRecipeDetails(index) {
    const recipe = recipes[index];
    recipeImage.src = recipe.image;
    recipeTitle.textContent = recipe.name;
    recipeIngredients.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
    recipeInstructions.innerHTML = recipe.instructions.map(step => `<li>${step}</li>`).join("");

    recipeList.style.display = "none";
    recipeDetails.classList.remove("hidden");
}

// Back to Recipe List
backButton.addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
    recipeList.style.display = "flex";
});
