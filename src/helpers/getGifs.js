export const getGifs = async () => {
    let poke = 'pikachu'
    //const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;  
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;
    const respuesta = await fetch(url);
    //const {id} = await respuesta.json();
    //const { name } = await respuesta.json();
    //const { sprites } = await respuesta.json();
    //const { front_default } =  sprites.other.home;
    //const resp = respuesta;       
    const { results } = await respuesta.json();
    //console.log('FRONT_DEFAULT',front_default);
    const gifs = results.map((img, i) => {
        return {
            id: i + 1,
            name: img.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png` //img.url
        }
    })

    return gifs;

    //console.log(gifs);
    //setimages(gifs);
    //images = setimages(gifs);

}