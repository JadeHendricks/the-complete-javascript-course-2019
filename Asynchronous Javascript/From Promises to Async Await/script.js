//Async await
//From callback hell to promises
//See Oldway folder for the code we are cleaning up

//Lets clean this up with promises
//Example
//the function inside the promise will immediately be called once the promise is created
//It is known as the executor function and this function takes in two arguments
//Which are the callback functions know as resolve and reject
//If the promise is successfull it will call the resolve function, if not it will call the reject function
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
      //this function takes in a argument which is the result of the promise
      //So this is basically how we would return our results from our promise if it was successful
      //if we use reject here it will return the data to the "Catch method"
      resolve([523, 883, 432, 111]); //Faking a AJAX call
    }, 1500);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {

    setTimeout(ID => {
      const recipe = {
        title: 'Fresh Tomato Pasta',
        publisher: 'Jonas'
      };
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID); //recID will become ID

  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
      setTimeout(pub => {
        const recipe = {
          title: 'Italian Pizza',
          publisher: 'Jonas'
        };
        resolve(`${pub}: ${recipe.title}`);
      }, 1500, publisher); //publisher here will be put in pub

  });
}

//this function continues to run in the background, just as we have learned before
//this async function then returns a promise
//the await keyword can only run inside of a async function
async function getRecipesAW() {
    //this getIDs is our first promise above and here we are consuming it and waiting for it to get resolved
    const IDs = await getIDs;
    //if this is resovled then IDs will become [523, 883, 432, 111]
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas Schmedtmann');
    console.log(related);

    //this will return too late to be console logged because the function is being run in the background will only work with ".then see below"
    return recipe;
}

//this will not work because getRecipesAWis running in the background, so by the time that we want to try and run the console.log here.
//This getRecipe function is still running in the background, so all that will be logged is Promise(<pending>) because this code is synchronous

// const rec = getRecipesAW();
// console.log(rec);

//this is possible because the async function always returns a promise
getRecipesAW().then(result => console.log(`${result} is the best ever!`));