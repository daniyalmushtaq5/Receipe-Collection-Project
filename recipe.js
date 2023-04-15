// IIFE Imediately invoke function expressions

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();

    const IpElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const result_ul = document.getElementById("recipe-list");
    const recipe_info = document.getElementById("recipeDetailsContainer");
    // const cross_btn = document.createElement("button");
    // const span = document.createElement('span');
    // cross_btn.innerHTML = "x";
    // IpElem.appendChild(cross_btn);

    function displayRecipeInfo(recipe){
        recipe_info.innerHTML = `<h2>${recipe.Name}</h2>
        <h3>Ingredients</h3>
        <ul>${recipe.Ingredients.map((indgredient) =>{
            return "<li>" + indgredient + "</li>";
        }).join(" ")}</ul>
        <h3> Instructions</h3>
        <div>${recipe.Method}</div>`
    }


    function showRecipes(results){
        result_ul.innerHTML = "";
        results.forEach((recipe) => {
            let li = document.createElement("li");
            li.innerHTML = `<div class = "title"><b>${recipe.Name}</b> </div>
            <div class = "description"> ${recipe.Description}</div>`;

            li.addEventListener("click", ()=>{
                displayRecipeInfo(recipe);
            });
            result_ul.appendChild(li);
        });
    }


    function searchfun(){
        const search_val = IpElem.value;
        const results = recipes.filter((recipe) =>{
            return (recipe.Name.toLowerCase().includes(search_val) || recipe.Ingredients.join(" ").toLowerCase().includes(search_val));
        });
        
        showRecipes(results);
    }
    btnElem.addEventListener("click", searchfun);
    IpElem.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { // Check if the Enter key was pressed
          searchfun(); // Call the search function
        }
      });
})();
