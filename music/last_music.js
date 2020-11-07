//Algo
/**
 * On recupère le Titre et l'Artiste qui passe en cours dans names_music.js
 * Dès que names_musics.js envoie l'information 'change music' (avec l'objet Set) 
 *  Si names_musics et églase à last_music[0]
 *      On break
 *          Sinon On pousse last_music[0] sûr last_music[1]
 *          ET
 *          On pousse last_music[1] sûr last_music[2]
 *          On pousse last_music[2] sûr last_music[3]
 *          On pousse last_music[3] sûr last_music[4]
 * 
 *          On prêt charge pour envoyer au front (last_music.js)
 *          Une fois prêt chargé on envoie 'last music it's ready' au front (last_music.js)
 * 
 */



//Recuperation variable
const names_musics = require('./names_musics')


let last_music = [
    {
        artist: null,
        title: null,
        album: null, 
        pochette: null
    },
    {
        artist: null,
        title: null,
        album: null, 
        pochette: null
    },
    {
        artist: null,
        title: null,
        album: null, 
        pochette: null
    },
    {
        artist: null,
        title: null,
        album: null, 
        pochette: null
    },
    {
        artist: null,
        title: null,
        album: null, 
        pochette: null
    },
]



//TEST
/*
recupLastMusic()


function recupLastMusic() {
    
    setInterval(() => {
        
        last_music[0].artist = 'david guetta'
        arrayMusic()
    }, 1000)
    
   
}

function arrayMusic() {
    let nb = -1

    while(nb < 4) {
        //increment nb de 1 , de zero à 4 donc fait un tour de boucle de 5
        nb++

        //On rajoute 1 sur la string pour l'affichage dans la console juste à titre informatif.
        console.log(`retourne derniere musique n°${nb+1}: \nArtist:${last_music[nb].title} \nTitle:${last_music[nb].artist}\n`)
        //Condition pour être sur que si nb arrive à 4 on sort de la boucle.
        if(nb === 4) {
            break
        }
    }
}
*/
//FIN TEST

//Export last_music
module.exports = last_music