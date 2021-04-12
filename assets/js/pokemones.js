console.log('Hi')

// $(document).ready(function(){

//   fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(function(data){
//       return data.json()
//   })
//   .then(function(data){ 
//     console.log(data)
//     data.results.forEach(pokemon => {  
//       document.querySelector('#pokemons').innerHTML = `<h1>${pokemon.name}</h1>`
//     });
//   })
// })

$(document).ready(function(){
  fetch('https://pokeapi.co/api/v2/pokemon/').then((data) => {
      return data.json()
  }).then((data) => {
      data.results.forEach(pokemon => {
          const pokemons = document.getElementById("pokemons");
          const newPokemon = document.createElement("li");
          newPokemon.innerHTML = `${pokemon.name}`
          pokemons.appendChild(newPokemon);
      })
  })
})
