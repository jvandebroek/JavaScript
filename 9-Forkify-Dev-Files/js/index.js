// Global app controller
import Recipe from './models/recipes';
import Search from './models/search';
import List from './models/list';
import Likes from './models/likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listVIew';
import * as likesView from './views/likesVIew';
import { elements, renderLoader, clearLoader } from './views/base';
/** Global state of the app
* - search object
* - current recipe object
* - shopping list object
* - liked recipes
*/
const state = {};


//Search Controller:
const controlSearch = async () =>{
    // 1) get Query from view
    const query = searchView.getInput(); 
    if(query){
        //2) new search object add to state
        state.Search = new Search(query);
        //3) prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        //4) Search for recipes
        try{
            await state.Search.getResults();
            //5) show results on UI
            clearLoader();
            searchView.renderResults(state.Search.result);
        }catch(err){
            console.log(err);
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.Search.result, goToPage);
    };
});

//Recipe Controller:

const controlRecipe = async () => {
    //get ID from url
    const id = window.location.hash.replace('#', '');
    if (id){
        //prepare UI for changes:
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        if (state.search) searchView.highlightSelected(id);
        //get new recipe obj
        state.recipe = new Recipe(id);
        //get and parse recipe data
        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            //calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        }catch(err){
            console.log(err);
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

window.addEventListener('load', () => {
    state.likes = new Likes();
    state.likes.readStorage();
    state.likes.likes.forEach(like =>{ likesView.renderLike(like);});
    likesView.toggleLikeMenu(state.likes.getNumLikes());
});

//recipe button clicks:
elements.recipe.addEventListener('click', e=> {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    }else if(e.target.matches('.btn-increase, .btn-increase *')){
        if(state.recipe.servings < 100){
            state.recipe.updateServings('inc');
            recipeView.updateServingsIngredients(state.recipe);
        }
    }else if (e.target.matches('.recipe__btn--add, recipe__btn--add *')){
        controlList();
    }else if (e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
});

const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    //user has not liked current recipe
    if(!state.likes.isLiked(currentID)){
        //add like to data
        const newLike = state.likes.addLike(
        currentID,
        state.recipe.title,
        state.recipe.author,
        state.recipe.img,
        )
        //toggle like button
        likesView.toggleLikeBtn(true);
        //add like to UI list
        likesView.renderLike(newLike);
    //user HAS liked current recipe:
    }else {
        //rmv like to data
        state.likes.deleteLike(currentID);
        //toggle like button
        likesView.toggleLikeBtn(false);
        //rmv like to UI list
        likesView.deleteLike(currentID);
        
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
}

const controlList = () => {
    // Create a new list IF there is none yet.
    if (!state.list) state.list = new List();
    //add each ing to list and UI
    state.recipe.ingredients.forEach(el =>{
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
    
};

elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem(id);
        listView.deleteItem(id);
    }else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});




//API key: 3c91ee44aefdc431e1a9ce0f9ce1a289
//https://www.food2fork.com/api/search
//https://www.food2fork.com/api/get 


































