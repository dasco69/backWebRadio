//variable environement
require('dotenv').config()

//DEPENCI
//Music
const names_musics = require('./music/names_musics.js')
const last_music = require('./music/last_music.js')
//Server express
const app = require('./app.js')

const routes = require('./routes/routes.js')
const path = require('path')

//middleware
const bodyParser = require('body-parser')
    //for return error for develepment environement
const errorhandler = require('errorhandler')

//HTTP
const http = require('http')

const PORT= process.env.PORT || 3001

// error handling middleware should be loaded after the loading the routes
if(process.env.NODE_ENV === 'production') {
    //running if production mode
    

} else {
    //running if development code
    process.env.PORT = 3000
}

app.listen(app, ()=> {
    console.log(`Listen to : 127.0.0.1:${PORT}`)
})
