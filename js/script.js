let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Haxorus',
            height: 1.8,
            types: 'Dragon'
        },
        {
            name: 'Omastar',
            height: 1,
            types: ['Rock', ' Water']
        },
        {
            name: 'Vanilluxe',
            height: 1.3,
            types: 'Ice'
        }
    ];
    
    function add(item) {
        pokemonList.push(item);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

console.log(pokemonRepository.getAll())
pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll())


pokemonRepository.getAll().forEach (function(pokemon) {
    document.write(`${pokemon.name}, (height: ${pokemon.height}), (types: ${pokemon.types})<br>`)
})



