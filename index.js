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






async function generaterandomQuotePost() {
  let apiKey = "ri5p9f0yJojJqR9hbdOkUw==ukSTriZIZMaVrwdZ"
  let apiUrl = "https://api.api-ninjas.com/v1/quotes"
  
  let bodyData ={
    category:"history",
    limit:1
  }


  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ` + apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

 const response = await fetch(apiUrl, options);
       
const data = await response.json();
console.log(data);
return data;

}

generaterandomQuotePost();