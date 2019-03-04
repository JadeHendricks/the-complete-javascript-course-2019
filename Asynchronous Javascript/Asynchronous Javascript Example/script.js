//Async
//EXAMPLE
const second = () => {
  //this runs in the background and doesn't block code from executing
  setTimeout(() => {
    console.log('Async Hey There');
  }, 2000);
}

const first = () => {
  console.log('Hey there');
  second();
  console.log('The end');
}

first();