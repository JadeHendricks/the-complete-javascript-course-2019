//file system
const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

//creating a server
//the callbacks are run each time someone enters our webserver
const server = http.createServer((request, response) => {
  //the url is stored in the request CBF
  //adding true tells it to store it as a object
  const pathName = url.parse(request.url, true).pathname;
  //this gives us the id from the query string
  //.query.id
  const id = url.parse(request.url, true).query.id;

  //PRODUCTS OVERVIEW
  if (pathName === '/products' || pathName === '/') {
    response.writeHead(200, {'Content-type': 'text/html'});
    
    fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (error, data) => {
      let overviewOutput = data;

      //we are nesting here because we only want to read the card template once the opverview tempalte has been read
      //so we are creating a sequence here
      fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (error, data) => {

        const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
        overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
        response.end(overviewOutput);
      });

    });
  } 

  //LAPTOP DETAIL
  else if (pathName === '/laptop' && id < laptopData.length) {
    response.writeHead(200, {'Content-type': 'text/html'});
    
    fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (error, data) => {
      const laptop = laptopData[id];
      const output = replaceTemplate(data, laptop);
      response.end(output);
    });
  }

  //IMAGES
  else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
    fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.end(data);
    });
  }

  //URL NOT FOUND
  else {
    response.writeHead(404, {'Content-type': 'text/html'});
    response.end('URL was not found on the server');
  }
});

server.listen(1337, '127.0.0.1', () => {
  console.log('listening for requests now');
});

function replaceTemplate (originalHTML, laptop) {

  let output = originalHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%ID%}/g, laptop.id);

  return output;
}