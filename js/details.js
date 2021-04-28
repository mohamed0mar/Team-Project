var param=new URLSearchParams(location.search);
var recipeId=param.get("rid");
var recipeImg=document.getElementById("recipeImg");
var recipeIngredient=document.getElementById("recipeIngredient");
var recipeDetails={};
var ingredient=[];

getRecipesDetails();
function getRecipesDetails() {
    var recipe = new XMLHttpRequest();
    recipe.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    recipe.send();
    recipe.addEventListener("readystatechange", function () {
      if (recipe.readyState == 4 && recipe.status == 200) {
        recipeDetails= JSON.parse(recipe.response).recipe;
        recipeImg.src=recipeDetails.image_url;
        ingredient=recipeDetails.ingredients;
        displayIngredient();
        
      }
    });
  }
  function displayIngredient(){
      var content='';
    for(var i=0;i<ingredient.length;i++){
        content+=`<li>${ingredient[i]}</li>`
    }
    document.getElementById("recipeIngredient").innerHTML=content;
  }