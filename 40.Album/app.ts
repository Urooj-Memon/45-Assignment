//define make album function

function make_album(artist_name: string, album_tittle: string, tracks?: number){
    let album: {artist: string, tittle: string, tracks?: number} = {
        artist: artist_name,
        tittle: album_tittle,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

//calling three function with different values

let album1 = make_album("Urooj", "Album tittle 1");

let album2 = make_album("Isra", "Album tittle 2");

//creating a make album function with thirf parameter
let album3 = make_album("Miral", "Album tittle 3", 10);

//printing the variable

console.log(album1);
console.log(album2);
console.log(album3);