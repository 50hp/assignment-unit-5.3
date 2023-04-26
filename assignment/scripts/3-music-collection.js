console.log('***** Music Collection *****')


let collection = [] //empty array to store all objects created.

//function to add objects to array collection.
    function addToCollection( title, artist, yearPublished ){  //takes strings as inputs to be added to an object. 
        console.log( 'in addToCollection' );    //logs out 'in addToCollection' to show which function is running.
        let album = {                           //the album object is created with the nessesary properties. 
            title: title,
            artist: artist,
            yearPublished: yearPublished,
            trackList: []                       //creates an empty array for later use when tracks are added to an album in function addTrackToo.
        }
        collection.push( album );               //pushes the album object into the collection array.
        return album;                           //returns the created album.
    }
//function to add tracks objects to trackList arry in collection.
    function addTrackToo( albumTitle, trackName, duration ){        //takes the album name, track name and the duration as inputs.
        console.log( 'in addTrackToo' );                            //logs out 'in addTrackToo' to show which function is running.
        for ( let i = 0; i < collection.length; i++ ) {             //loops through the collection array to search for matching albums.
            if ( albumTitle === collection[i].title ) {             //if a match is found a track object is created using the trackName and duration inputs.
                let track = {
                    trackName: trackName,
                    trackDuration: duration
                }
                collection[i].trackList.push( track );              //adds the track object to the trackList array in album object in the collection array.
            }
        }
        return collection;                                          //returns the current collection
    }

//Test call 
console.log( addToCollection( 'Reborn', 'Kavinsky', 2022, ) );
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
            for (let n = 0; n < ( showInput[i].trackList.length ); n++ ) {
                console.log( `${n}. ${showInput[i].trackList[n].trackName}: ${showInput[i].trackList[n].trackDuration}` );
            }
        }

        return true;
    }

//Test call



//function to search by artist name.
    function findByArtist( artistName ){
        console.log('in findByArtist');
        let artistMatch = [];
        for (let i = 0; i < ( collection.length ); i++) {
            if (collection[i].artist === artistName ) {
                artistMatch.push( collection[i] );
            }
        }
        return artistMatch;
    }
//Test Call 
console.log( findByArtist( 'Ween' ) );
console.log( findByArtist( 'Pink Floyd' ) );
console.log( findByArtist( 'Pink' ) );

//Example object 
//inputObject{
    //artist:  ,
    //year:    ,
    //album:   ,
    //trackName: 
   // }


//Function to search by year and artist or by trackName. 
function search( inputObject ){
    console.log('in search');
    let artistMatch = [];
    if( ! inputObject ) {
        return collection;
    }
    if( inputObject.trackName === undefined ){
        for ( let x of collection ) {
            let i=0;
            if (inputObject.artist != undefined && inputObject.artist === x.artist ){
                i++;
            }
            if (inputObject.year != undefined && inputObject.year === x.yearPublished ) {
                i++;
            }
            if (inputObject.album != undefined && inputObject.album === x.title ) {
                i++;
            }
            if (Object.keys( inputObject ).length === i ){
                artistMatch.push( x );
            }
        }
        return artistMatch;

    }else{
        for ( let i = 0; i < collection.length; i++ ) {
            for ( let n = 0; n < collection[i].trackList.length; n++ ) {
                if ( inputObject.trackName === collection[i].trackList[n].trackName ) {
                    artistMatch.push( collection[i].trackList[n] );
                }
            }
        }
        console.log( `The song ${artistMatch[0].trackName} is in the collection and it's duration is ${artistMatch[0].trackDuration} ` );
        return artistMatch;
    }
}
//Test Call
console.log( search( {artist:'Justice', year: 2007,} ) )
console.log( search( {artist: 'Pink Floyd', year: 1979,} ) );
console.log( search(  ) );
console.log( search( {artist: 'Pink Floyd', album: 'The Wall'} ) );
console.log( search( {year: 2022,} ) );




//Test Calls for Dayz
console.log( addTrackToo( 'Reborn', 'Pulsar', '3:34' ) );
console.log( addTrackToo( 'Reborn', 'Reborn', '3:41' ) );
console.log( addTrackToo( 'Reborn', 'Renegade', '3:18' ) );
console.log( addTrackToo( 'Reborn', 'Trigger', '3:39' ) );
console.log( addTrackToo( 'Rebbborn', 'Pulsar', '3:30' ) );//Test for Else
console.log( addTrackToo( 'Reborn', 'Goodbye', '4:18' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'Speak to Me', '1:05' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'Breathe (In the Air)', '2:49' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'On the Run', '3:45' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'Time', '6:53' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'The Great Gig in the Sky', '4:43' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'Money', '6:22' ) );
console.log( addTrackToo( 'The Dark Side of the Moon', 'Us and Them', '7:49' ) );
console.log( addTrackToo( 'The Mollusk', 'Im Dancing in the Shown Tonight', '1:55' ) );
console.log( addTrackToo( 'The Mollusk', 'The Mollusk', '2:36' ) );
console.log( addTrackToo( 'The Mollusk', 'Polka Do Tail', '3:19' ) );
console.log( addTrackToo( 'The Mollusk', 'Ill Be Your Jonny on the Spot', '2:00' ) );
console.log( addTrackToo( 'The Mollusk', 'Mutilated Lips', '3:48' ) );
console.log( addTrackToo( 'Dreanland', 'Dreamland', '3:23' ) );
console.log( addTrackToo( 'Dreanland', 'Tangerine', '3:20' ) );
console.log( addTrackToo( 'Dreanland', 'Hot Sugar', '3:54' ) );
console.log( addTrackToo( 'Dreanland', 'Space Ghost Coast To Coast', '3:07' ) );
console.log( addTrackToo( 'The Wall', 'In the Flesh', '3:18' ) );
console.log( addTrackToo( 'The Wall', 'The Thin Ice', '2:26' ) );
console.log( addTrackToo( 'The Wall', 'Another Brick in the Wall, Pt.1', '3:12' ) );
console.log( addTrackToo( 'The Wall', 'Another Brick in the Wall, Pt.2', '3:58' ) );
console.log( addTrackToo( 'The Wall', 'Mother', '5:34' ) );
console.log( addTrackToo( 'The Wall', 'Goodbye Blue Sky', '2:47' ) );
console.log( addTrackToo( 'The Wall', 'Empty Spaces', '2:07' ) );
console.log( addTrackToo( 'IMPERA', 'Imperium', '1:40' ) );
console.log( addTrackToo( 'IMPERA', 'Kaisarion', '5:02' ) );
console.log( addTrackToo( 'IMPERA', 'Spillways', '3:16' ) );
console.log( addTrackToo( 'IMPERA', 'Call Me Little Sunshine', '4:44' ) );
console.log( addTrackToo( 'IMPERA', 'Hunters Moon', '3:16' ) );
console.log( showCollection( collection ) );
console.log( collection );


//Example object 
//inputObject{
    //artist:  ,
    //year:    ,
    //album:   ,
    //trackName: 
   // }




console.log( search( {artist: 'Ghost', year: 2022} ) );
console.log( search( {artist: 'Kavinsky', year: 2022, trackName: 'Pulsar' } ) );
console.log( search( {artist: 'Pink Floyd', yera: 1979, trackName: 'Another Brick in the Wall, Pt.1'} ) );
console.log( search( {album: 'IMPERA'} ) );
console.log( search( {trackName: 'Dreamland'} ) );








