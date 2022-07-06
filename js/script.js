let pokemonList = [
    {
        name: 'Haxorus',
        height: 1.8,
        types: 'Dragon'
    },
    {
        name: 'Omastar',
        height: 1,
        types: ['Rock', 'Water']
    },
    {
        name: 'Vanilluxe',
        height: 1.3,
        types: 'Ice'
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    if (pokemonList[i].height > 1.5) {
        document.write(" - Wow! That's big!" + "<br>")
    }
    else {
        document.write("<br>")
    }
    
}

