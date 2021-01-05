const pokémonList = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


// OUTPUT:
// An array of pokémon objects where the id is evenly divisible by 3
const pokeD3 = pokémonList.filter( poke => poke.id % 3 === 0 );
console.log(pokeD3);

// An array of pokémon objects that are "fire" type
const fire = pokémonList.filter( poke => poke.types[0] === "fire" );
console.log(fire);

// An array of pokémon objects that have more than one type
const twoTypes = pokémonList.filter( poke => poke.types.length === 2 );
console.log(twoTypes);

// An array with just the names of the pokémon
const names = pokémonList.map( poke => poke.name );
console.log(names);

// An array with just the names of pokémon with an id greater than 99
const over99 = pokémonList.filter( poke => poke.id > 99 ).map( pok => pok.name );
console.log(over99);

// An array with just the names of the pokémon whose only type is poison
const poisonNames = pokémonList.filter( poke => poke.types.length === 1 ).filter( pok => pok.types[0] === "poison" ).map( p => p.name );
console.log(poisonNames);

// An array containing just the first type of all the pokémon whose second type is "flying"
const secondFly = pokémonList.filter( poke => poke.types[1] == "flying" ).map( pok => pok.types[0] );
console.log(secondFly);

// A count of the number of pokémon that are "normal" type
const manyNormals = pokémonList.filter( poke => poke.types[0] === "normal" ).length;
console.log(manyNormals);