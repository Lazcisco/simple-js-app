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

    function showDetails(pokemon) {
        console.log(pokemon)
    };

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('poke-button')
        listItem.appendChild(button)
        pokemonList.appendChild(listItem)
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };

})();

console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach (function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});


