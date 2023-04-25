console.log('***** Music Collection *****')


let collection = []

//function to add objects to array collection.
    function addToCollection( title, artist, yearPublished ){
        console.log( 'in addToCollection' );
        let album = {
            title: title,
            artist: artist,
            yearPublished: yearPublished,
            trackList: []
        }
        collection.push( album );
        return album;
    }
//function to add tracks objects to trackList arry in collection.
function addTrackToo( albumTitle, trackName, duration ){
    console.log( 'in addTrackToo' );
    for ( let i = 0; i < collection.length; i++ ) {
        if ( albumTitle === collection[i].title ) {
            let track = {
                trackName: trackName,
                trackDuration: duration
            }
            return collection[i].trackList.push( track );
        }else {
           return 'No ablums that match imput';
        }
    } 
}

//Test call 
console.log( addToCollection( 'Reborn', 'Kavinsky', 2022, ) );
console.log( addTrackToo('Reborn', 'Pulsar', '3:34' ) );
console.log( addTrackToo('Reborn', 'Reborn', '3:41' ) );
console.log( addTrackToo('Reborn', 'Renegade', '3:18' ) );
console.log( addTrackToo('Reborn', 'Trigger', '3:39' ) );
console.log( addTrackToo('Rebbborn', 'Pulsar', '3:30' ) );
console.log( collection );


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
            console.log( `${showInput[i].trackList}` );
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

