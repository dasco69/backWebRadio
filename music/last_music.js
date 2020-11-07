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
    }
]


//Export last_music
module.exports = last_music