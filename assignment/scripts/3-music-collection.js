console.log('***** Music Collection *****')


let collection = []

//function to add objects to array collection.
function addToCollection( title, artist, yearPublished ){
    console.log( 'in addToCollection' );
    let album = {
        title: title,
        artist: artist,
        yearPuplished: yearPublished
    }
    collection.push( album );
    return album;
}
//Test call 
console.log( addToCollection( 'Reborn', 'Kavinsky', 2022 ) );
console.log( addToCollection( 'The Dark Side of the Moon', 'Pink Floyd', 1973 ) );
console.log( addToCollection( 'R Plus Seven', 'Ween', 1997 ) );
console.log( addToCollection( 'Dreanland', 'Glass Animals', 2020 ) );
console.log( addToCollection( 'The Wall', 'Pink Floyd', 1979 ) );
console.log( addToCollection( 'IMPERA', 'Ghost', 2022 ) );
console.log( collection );

//function to list all albums in collection.
function showCollection( showInput ){
    console.log('in showCollection' );
    for (let i = 0; i < (showInput.length); i++){
        console.log(` ${showInput[i].title} by ${showInput[i].artist}, published in ${showInput[i].yearPublished} ` );
    }

    return;


}
//Test call
console.log( showCollection( collection ) );



//function to search by artist name.


