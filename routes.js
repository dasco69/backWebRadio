let routes = {
    index: (req, res, next)=> { res.send('Hello')},
    //radio mazette url
    url_radio: 'http://82.165.206.27:8000/live',
    url_status: 'http://82.165.206.27:8000/status-json.xsl',
    url_headless: 'localhost:1337',
}

//export routes
module.exports = routes