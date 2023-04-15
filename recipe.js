// IIFE Imediately invoke function expressions

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();

    const IpElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const result_ul = document.getElementById("recipe-list");

    function showRecipes(results){
        result_ul.innerHTML = "";
        const add_li = 
    }

    function searchfun(){
        const search_val = IpElem.value;
        const results = recipes.filter((recipe) =>{
            return recipe.Name.toLowerCase().includes(search_val) || 
            recipe.Description.toLowerCase().includes(search_val);
        });
        
        showRecipes(results);
    }
    btnElem.addEventListener("click", searchfun);
})();
