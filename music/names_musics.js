//Algo
/**
 * On scrap le serveur Icecast depuis la routes url_radio dans(../route.js)
 * On recupere les informations Artist et Title que l'on pousse sur le serveur headless STRAPI (/music-player (single-types))
 * On vérifie toutes les X secondes si les informations on changé
 *  Si les informations du serveur icecast sont identique
 *      On ne change rien
 *          Sinon on PUT
 *          On envoie la variables modifier à une api de pochette 'API_pochette.js'
 *          On attend le retour de l'url de l'img pochette
 *          On envoie la variable names_musics au Headless_radio sur la table 'Musique_en_cours'
 *          On envoie la variable names_musics au Headless_radio sur la table '5 Dernières musiques'
 * 
 */

/**
 * @module : on importe nos modules
 * @fetch : module nodejs
 * @axios : module nodejs
 */
const fetch = require('node-fetch');
const axios = require('axios')

/**
 * @module
 * @routes : modules des différentes routes utiliser dans l'applications
 * @path : modules des différentes chemin utiliser dans l'applications
 * @TOKEN : Token de l'api headless Strapi 
 */
const routes = require('../routes/routes.js')
const path = require('../routes/path.js')
const TOKEN = require('../mongoDB/bdd.js')

/**
 * @constructor 
 *  @url_icecast : retourn l'url icecast plus point de montage
 *  @interval : retourn l'interval pour la @function returnMusic()
 *  @url_music_player : Url de l'API headless Strapi (Single type) qui retourne la music écouter en cours
 */
class OptionMusic {
    constructor (url_icecast , interval , url_music_player) {
        
        this.url_icecast = url_icecast
        this.interval = interval
        this.url_music_player = url_music_player

        this.myInit = { 
            method: 'GET',
            mode: 'cors',
            cache: 'default' 
        }

        let artist = null
        let title = null
        let album = null
        let pochette = null

        //Pour headless strapi /music-player method PUT

        //Url api pochette
        const API = ''
       
        
    }

    /**
     * @function getName() : 
     *  @fetch :
     * scrapper le nom de la music qui est jouer sur le serveur icecast ou point de montage "/live", il retourne le Titre et le nom de l'artiste
     * On le split pour pouvoir le réutilisé correctement.
     *  @axios : 
     *  Après la récuperation de title et artist , on PUT dans le serveur headless STRAPI (/music-player (single types))
     */
    async getName () {
        try {
            await fetch(this.url_icecast, this.myInit )
                            .then(res => res.json())
                            .then(body => {
                                let nameMusic = body.icestats.source.title
                                let word = nameMusic.split(' - ')
                                this.artist = word[0]
                                this.title = word[1]

                                //Retourne info dans db strapi music_players

                                axios.put(this.url_music_player, {
                                        "title": this.title,
                                        "artist": this.artist,
                                        "pochette": null
                                    }, {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            "Access-Control-Allow-Origin" : "*",
                                            'Authorization': `Bearer ${TOKEN}`
                                        }
                                    })
                                    .then(resp => resp)
                                    .catch(err => console.error(err))
                                                   
                            })
                            .catch(err => {
                                console.log(err)
                            })
        }
        
        catch (error){
            console.error(error)
        }
    
    }

    async returnMusic () {
        
            //On start la fonction getName()
            this.getName()
            
            if(fetch.FetchError) {
                clearInterval(reload)
                
            }else {
                var reload = setInterval(() => {
                    this.getName()
                }, this.interval)
            }
        }
       
}

// url du serveur icecast + l'interval pour scrapper nom et artist musique + url et chemin du headless strapi où l'on va PUT les données

let nameMusic = new OptionMusic(routes.url_status, 3000 , routes.url_headless + path.path_head_music )

console.log(nameMusic.returnMusic())

module.exports = nameMusic

