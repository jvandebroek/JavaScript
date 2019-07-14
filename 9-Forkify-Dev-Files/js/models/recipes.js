import axios from 'axios';
import {key, proxy} from '../config';
export default class Recipe{
    constructor(id){
        this.id = id;
    }
    async getRecipe(){
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }catch(error){
            console.log(error);
        }
    }
    calcTime() {
        //assume 15 min / ingredient...
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time = periods * 15;
    }
    calcServings(){
        //everything is 4 servings for today.
        this.servings = 4;
    }
    parseIngredients(){
        const unitsLong = ['tablespoon', 'tablespoons', 'ounce', 'ounces', 'ozs', 'teaspoon', 'teaspoons', 'cups', 'pound', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'lbs', 'lbs'];
        const units = [...unitsShort, 'kg', 'g'];
        const newIngredients = this.ingredients.map(el =>{
            //uniform ingredients:
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });
            //remove ():
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            
            //parse ing into count unit and ing
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
            let objIng;
            if (unitIndex > -1){
                //there is a unit
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length == 1){
                    count = eval(arrIng[0].replace('-', '+'));
                }else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }
                
                objIng = {
                    count: count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }
            }else if (parseInt(arrIng[0], 10)){
                //there is no unit but first element is a number.
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }
            else if(unitIndex === -1){
                //there is NO unit NOR number
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient: ingredient
                }
            }
            
            return objIng;
            
        });
        this.ingredients = newIngredients;
    }
    updateServings(type) {
        //type === dec or inc
        //servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
        //ingred
        this.ingredients.forEach(ing =>{
            ing.count *= (newServings / this.servings);
        });
        this.servings = newServings;
    }
}






















