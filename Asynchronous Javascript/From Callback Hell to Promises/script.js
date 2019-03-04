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

//we can use 2 methos on all promises called the "then" or the "catch" methods
//All of the promise objects inherit these 2 methods

//"Then" is a callback function and we add our paramters into it to tell it what to do if the promise was successful
//The argument will be the result of the successful promise
//in this case it would be [523, 883, 432, 111]
getIDs
.then(IDs => {
  console.log(IDs);
  //we use the return method here to retun the info and allow us to chain onto it with another "then"
  //This is known as chaning
  //this will return a promise, then we can add the next "then" to handle the rult of the return
  return getRecipe([IDs[2]]);
})
.then(recipe => {
  console.log(recipe);
  return getRelated('Jonas');
})
.then(recipe => {
  console.log(recipe);
})
.catch(error => {
  console.log('Error!!');
  console.log(error);
});