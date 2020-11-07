//Algo
/**
 * On scrap le serveur Icecast depuis la routes url_radio dans(../route.js)
 * On recupere les informations Artist et Title que l'on pousse dans variable 'names_musics'
 * On vérifie toutes les X secondes si les informations on changer ou pas
 *  Si les informations du serveur icecast sont identique
 *      On ne change rien (on break)
 *          Sinon on modifie la variable
 *          On envoie la variables modifier à une api de pochette 'API_pochette.js'
 *          On attend le retour de l'url de l'img pochette
 *          On envoie la variable names_musics au Headless_radio sur la table 'Musique_en_cours'
 *          On envoie la variable names_musics au Headless_radio sur la table '5 Dernières musiques'
 * 
 */


const routes = require('../routes/routes.js')
const fetch = require('node-fetch');


class OptionMusic {
    constructor (url , interval) {
        this.interval = interval
        this.url = url
        this.myInit = { 
            method: 'GET',
            mode: 'cors',
            cache: 'default' 
        }

        this.artist = null
        this.title = null
        this.album = null
        this.pochette = null

        //Url api pochette
        const API = ''
        //Key
        const key = ''

        
    }

    //fonction 
    async getName () {
        try {
            await fetch(this.url, this.myInit )
                            .then(res => res.json())
                            .then(body => {
                                let nameMusic = body.icestats.source.title
                                let word = nameMusic.split(' - ')
                                this.artist = word[0]
                                this.title = word[1]
                                console.log(`
                                    Artist: ${this.artist} \n
                                    Title: ${this.title}
                                `)
                            })
                            .catch(err => {
                                console.log(err)
                            })
        }
        
        catch (error){
            console.error(error)
        }
    
    }

    returnMusic () {
        
        try {
            this.getName()
            var reload = setInterval(() => {
                            this.getName()
                        }, this.interval)
        }
        catch(error) {
            if(error) {
                clearInterval(reload)
            }
        }
    }
}

let nameMusic = new OptionMusic(routes.url_status, 3000 )
console.log(nameMusic.returnMusic())

module.exports = nameMusic

