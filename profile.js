const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();
 
//Search an artist
deezer.search.artist('ILYSH').then(function(result) {
 
 
 console.log(result);
});


//https://api.deezer.com/artist/15164467/top?limit=50



 

