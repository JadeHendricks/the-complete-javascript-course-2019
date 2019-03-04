//Async with callbacks
//Callback hell - ES6 introduces promises to help us out with this.
//EXAMPLE
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 883, 432, 111];
    console.log(recipeID);

    //inside of a setTimeout function we can also set a 3 argument
    //And that will be returned to the callback function
    //The third argument is passed into the argument so recipe.publisher will take the place of publisher
    setTimeout(id => {
      const recipe = {
        title: 'Fresh Tomato Pasta',
        publisher: 'Jonas'
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout(publisher => {
        const recipe2 = {
          title: 'Italian Pizza',
          publisher: 'Jonas'
        };
        console.log(recipe2);
      }, 1500, recipe.publisher);

    }, 1500, recipeID[2]);

  }, 1500);
}

getRecipe();
