async function generaterandomQuote() {
let api_Key = "ri5p9f0yJojJqR9hbdOkUw==ukSTriZIZMaVrwdZ"

let randomQuote = "https://api.api-ninjas.com/v1/quotes"

const options = {
  method: "GET",
  headers: {
   'X-Api-Key': api_Key,
    'Content-Type': 'application/json'
  },
}
  

const response = await fetch(randomQuote, options);

  const data = await response.json();
  console.log(data); 
  return data;
}


generaterandomQuote();