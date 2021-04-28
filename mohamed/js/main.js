// function getPizza() {
//   return new Promise(function (resolve,reject) {
//     var recipe = new XMLHttpRequest();
//     recipe.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     recipe.send();
//     recipe.addEventListener("readystatechange", function () {
//       if (recipe.readyState == 4 && recipe.status == 200) {
//         recipes = JSON.parse(recipe.response).recipes;
//         console.log("pizzaaaaaaaaaaaaaa", recipes);
//       }
//     });
//   });
// }


async function getPizza(){
 var apiResponse=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
 var response=await apiResponse.json();
 console.log("pizzaaaaaaaaaaa",response .recipes);
}

async function getPasta(){
  var apiResponse=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pasta`);
  var response=await apiResponse.json();
  console.log("pastaaaaaaaa",response.recipes);
}

function test(){
  console.log("testtttt")
}

async function getRecipes(){
  await getPizza()
  await getPasta()
  test()
  
}
getRecipes()





// function getPizza() {
//   return new Promise(function (callBack) {
//     var recipe = new XMLHttpRequest();
//     recipe.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     recipe.send();
//     recipe.addEventListener("readystatechange", function () {
//       if (recipe.readyState == 4 && recipe.status == 200) {
//         recipes = JSON.parse(recipe.response).recipes;
//         console.log("pizzaaaaaaaaaaaaaa", recipes);
//         callBack();
//       }
//     });
//   });
// }

// function getPasta() {
//   return new Promise(function (resolve,reject) {
//     var recipe = new XMLHttpRequest();
//     recipe.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`);
//     recipe.send();
//     recipe.addEventListener("readystatechange", function () {
//       if (recipe.readyState == 4 && recipe.status == 200) {
//         recipes = JSON.parse(recipe.response).recipes;
//         console.log("pastaaaaaaaaaaaaaaaaaa", recipes);
//         var cod=true;
//         if(cod==false){
//           resolve();
//         }
//         else{
//           reject();
//         }
//       }
//     });
//   });
// }

// function finsh() {
//   console.log("finshhhhhhhhhhhh");
// }


// getPasta().then(function(){console.log("resolve")}).catch(function(){console.log("reject")})






// getPasta(function(){
//   getPizza(function(){
//     finsh();
//   })
// })

// var links = document.querySelectorAll(".nav-link");
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", nextRecipes);
// }
// getRecipes("pizza");
// function nextRecipes(e) {
//   meal = e.target.text;
//   getRecipes(meal);

// }
// var recipes = [];
// function getRecipes(meal) {
//   var recipe = new XMLHttpRequest();
//   recipe.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
//   recipe.send();
//   recipe.addEventListener("readystatechange", function () {
//     if (recipe.readyState == 4 && recipe.status == 200) {
//       recipes = JSON.parse(recipe.response).recipes;
//       displayRecipes();
//     }
//   });
// }
// function displayRecipes() {
//   var container = "";
//   for (var i = 0; i < recipes.length; i++) {
//     container += `
//         <div class="col-md-3 my-4">
//                <img class="w-100 imag-recipes" src="${recipes[i].image_url}">
//                <h5 class="mt-3">${recipes[i].title}</h5>
//              </div>
//         `;
//   }
//   document.getElementById("rowData").innerHTML = container;
// }
