async function jokeApi(){
    let data= await fetch('https://v2.jokeapi.dev/joke/Programming')   //fetch API call
    let joke=await data.json()
    jokeElement.innerHTML=joke.setup;
    jokeElement2.innerHTML=joke.delivery
}
// Api Call
jokeApi()


