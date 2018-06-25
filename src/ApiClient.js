const url='http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=7f290ec42693f61f004954f8cd2e3827&format=json'
function getArtist(){
    return fetch(url)
    .then(response => response.json())
    .then(data => data.topartists.artist )
    .then (artist => artist.map(artist=>{
        return{
            name:artist.name,
            image:artist.image[3]['#text'],
            likes:200,
            comment:2000
        }
    }))
    
}
export {getArtist}