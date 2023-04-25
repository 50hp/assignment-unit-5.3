console.log('***** Music Collection *****')


let collection = []

//function to add objects to array collection.
    function addToCollection( title, artist, yearPublished ){
        console.log( 'in addToCollection' );
        let album = {
            title: title,
            artist: artist,
            yearPublished: yearPublished
        }
        collection.push( album );
        return album;
    }
//Test call 
console.log( addToCollection( 'Reborn', 'Kavinsky', 2022 ) );
console.log( addToCollection( 'The Dark Side of the Moon', 'Pink Floyd', 1973 ) );
console.log( addToCollection( 'The Mollusk', 'Ween', 1997 ) );
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
    function findByArtist( artistName ){
        console.log('in findByArtist');
        let artistMatch = [];
        for (let i = 0; i < ( collection.length ); i++) {
            if (collection[i].artist === artistName ) {
                artistMatch.push( collection[i] );
            }else {
                console.log('No Matches');
            }
        }
        return artistMatch;
    }
//Test Call 
console.log( findByArtist( 'Ween' ) );
console.log( findByArtist( 'Pink Floyd' ) );
console.log( findByArtist( 'Pink' ) );


//Function to search by year and artist 
function search( artistName, yearPub ){
    console.log('in search');
    let artistMatch = [];
    for ( let i = 0; i < collection.length; i++ ){
        if ( artistName === collection[i].artist && yearPub === collection[i].yearPublished ){
            artistMatch.push(collection[i]);
        } 
    }
    if ( artistMatch.length === 0 ) {
        console.log( artistMatch, 'Empty Array' );
    }

    return artistMatch;

}
//Test Call
console.log( search( 'Ghost', 2022 ) );
console.log( search( 'Justice', 2007 ) );
console.log( search( 'Pink Floyd', 1979) );

